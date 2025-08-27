import fs from "fs";
import path from "path";
import puppeteer, { type Browser, type Page } from "puppeteer";

import { capitalize } from "@/lib/utils";

import type { LocationData } from "@/types";

interface RawDataProps {
  sayfadaki_kayitsayisi: number;
  kayit_sayisi: number;
  sayfa_numarasi: number;
  onemliyer: RawLocationProps[];
  toplam_sayfa_sayisi: number;
}

interface RawLocationProps {
  ILCE: string;
  KAPINO: string | null;
  ENLEM: number;
  BOYLAM: number;
  ACIKLAMA: string | null;
  ILCEID: string;
  MAHALLE: string | null;
  MAHALLEID: string | null;
  ADI: string;
  YOL: string | null;
}

class DataLoader {
  private outputDir: string = "./src/data/parsed";

  private fetchDetails: { endpoint: string; outputFile: string }[] = [
    {
      endpoint: "https://openapi.izmir.bel.tr/api/ibb/cbs/antikkentyapilari",
      outputFile: "antik-kent-yapilari",
    },
    {
      endpoint: "https://openapi.izmir.bel.tr/api/ibb/cbs/antikkentler",
      outputFile: "antik-kentler",
    },
    {
      endpoint: "https://openapi.izmir.bel.tr/api/ibb/cbs/koskvekonaklar",
      outputFile: "kosk-ve-konaklar",
    },
    {
      endpoint: "https://openapi.izmir.bel.tr/api/ibb/cbs/kuleanitveheykeller",
      outputFile: "kule-anit-ve-heykeller",
    },
    {
      endpoint: "https://openapi.izmir.bel.tr/api/ibb/cbs/muzeler",
      outputFile: "muzeler",
    },
    {
      endpoint: "https://openapi.izmir.bel.tr/api/ibb/cbs/tarihicarsivehanlar",
      outputFile: "tarihi-carsi-ve-hanlar",
    },
    {
      endpoint: "https://openapi.izmir.bel.tr/api/ibb/cbs/meydanlar",
      outputFile: "tarihi-meydanlar",
    },
    {
      endpoint: "https://openapi.izmir.bel.tr/api/ibb/cbs/tarihisuyapilari",
      outputFile: "tarihi-su-yapilari",
    },
    {
      endpoint: "https://openapi.izmir.bel.tr/api/ibb/cbs/tarihiyapilar",
      outputFile: "tarihi-yapilar",
    },
  ];

  private normalizeData(input: string): string {
    /**
     * Note: Visitation data removal prevents accidentally providing false or outdated information
     * about visiting hours, appointment procedures, or access requirements that may have
     * changed since the data was last updated.
     */

    return (
      input
        // Fix missing apostrophes in Turkish year suffixes (e.g., "1900de" → "1900'de")
        .replace(/(\d{4})([a-zA-ZçğıöşüÇĞIİÖŞÜ]+)/g, "$1'$2")

        // Remove sentences containing time values (e.g., "10.00-17.00 ve 18.30-20.30")
        .replace(
          /[^.!?]*(?:\b\d{1,2}[:.]\d{2}(?:\s*[-–]\s*\d{1,2}[:.]\d{2})?(?:\s+ve\s+\d{1,2}[:.]\d{2}(?:\s*[-–]\s*\d{1,2}[:.]\d{2})?)*)[^.!?]*[.!?]/gi,
          "",
        )

        // Remove sentences with visitation-related phrases ("ziyaret edil-", "randevu alın-")
        .replace(/[^.!?]*\bziyaret\b[^.!?]*\bedil[^.!?]*[.!?]/gi, "")
        .replace(/[^.!?]*\brandevu\b[^.!?]*\balın[^.!?]*[.!?]/gi, "")

        // Convert brackets [] and {} to parentheses ()
        .replace(/\[/g, "(")
        .replace(/\]/g, ")")
        .replace(/\{/g, "(")
        .replace(/\}/g, ")")

        // Add proper spacing around parentheses
        .replace(/(\S)\(/g, "$1 (")
        .replace(/\)(\S)/g, ") $1")

        // Replace multiple spaces with single space
        .replace(/\s{2,}/g, " ")

        // Remove spaces before punctuation
        .replace(/\s+([.!?])/g, "$1")

        // Uppercase abbreviations
        .replace(/\b(tcg|t\.c\.|tc|apikam|müziksev)\b/gi, (match) => match.toUpperCase())

        // Convert Turkish ordinals to dot notation (e.g., "1inci" → "1.")
        .replace(/\b(\d+)\.?\s*(inci|ıncı|uncu|üncu|nci|ncı|ncu|ncü)\b/gi, "$1.")

        // Remove spesific information about visits
        .replace(
          "Girişler; 4 yaş altı ücretsiz, yetişkinlerse ücrete tabidir. Grup ziyaretleri randevu alınarak yapılmaktadır",
          "",
        )
        .replace(
          "(Gaziemir'deki binada müzeyle ilgili olan yöneticiyle yapılan yüz yüze görüşmede müzenin en kısa sürede tekrar faaliyete geçeceği ancak şu sıra ziyaret etmenin olası olmadığı bilgisine de ulaşıldı. Bununla birlikte Altay Spor Kulübü'nün tarihiyle ilgilenenlerin yukarıda iletişim bilgileri içinde yer alan web adresinden Altay Spor Kulübü ve kulübün tarihi, faaliyetleri ve misyonu hakkında bilgiye ulaşmaları da olasıdır. ",
          "",
        )
        .replace("Hafta içi her gün mesai saatleri içerisinde, ücretsiz olarak ziyarete açıktır", "")

        // Add more detailed data about spesific locations
        .replace(
          "Kemalpaşa'ya 5 km.",
          "Müzede, Ümran Baradan tarafından yapılmış tablo ve seramiklerle, çeşitli sanatçıların ödül almış ve müzayedeye girmiş eserleri bulunmaktadır. Bu eserlerin yanı sıra 49 ülkeden tanınmış sanatçıların seramik ve heykel çalışmaları da müzede bulunmaktadır.",
        )

        // Normalize all apostrophe-like characters
        .replace(/[''‛‚`´]/g, "'")
    );
  }

  private parseLocationData(rawData: RawLocationProps[]): LocationData[] {
    return rawData
      .filter((item) => item.ACIKLAMA && item.ACIKLAMA.trim() !== "")
      .map((item) => {
        return {
          isim: this.normalizeData(capitalize(item.ADI)),
          aciklama:
            item.ACIKLAMA === null || item.ACIKLAMA === undefined || item.ACIKLAMA.trim() === ""
              ? null
              : this.normalizeData(item.ACIKLAMA),
          koordinatlar: {
            enlem: item.ENLEM,
            boylam: item.BOYLAM,
          },
          adres: {
            ilce: capitalize(item.ILCE),
            mahalle: item.MAHALLE ? capitalize(item.MAHALLE) : null,
          },
        };
      });
  }

  public async run(): Promise<void> {
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
      console.debug("Created output directory.");
    }

    const browser: Browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-blink-features=AutomationControlled"],
    });

    const page: Page = await browser.newPage();
    console.debug("Launched headless browser.");

    for (const details of this.fetchDetails) {
      try {
        console.debug(`Navigating to ${details.endpoint}.`);
        await page.goto(details.endpoint);

        const htmlContent: string = await page.content();
        const preTagMatch: RegExpMatchArray | null = htmlContent.match(/<pre[^>]*>([\s\S]*?)<\/pre>/i);
        if (!preTagMatch) {
          throw new Error(`Failed to get content from ${details.endpoint}.`);
        }

        const rawData: RawDataProps = JSON.parse(preTagMatch[1].trim()) as RawDataProps;
        const parsedData: LocationData[] = this.parseLocationData(rawData.onemliyer);

        const keyParts: string[] = details.outputFile.split("-");
        const variableName: string = keyParts.at(0) + keyParts.slice(1).map(capitalize).join("");

        const fileContent: string = `import type { LocationData } from "@/types";

export const ${variableName}: LocationData[] = ${JSON.stringify(parsedData, null, 2)};`;

        const outputFileLocation: string = path.join(this.outputDir, details.outputFile + ".ts");
        await fs.promises.writeFile(outputFileLocation, fileContent, "utf-8");
      } catch (error) {
        console.error(error);
        return;
      }
    }

    console.debug("Retrieved all the data. Closing the browser.");
    await browser.close();
  }
}

const dataLoader = new DataLoader();
dataLoader.run();
