import fs from "fs";
import path from "path";

import antikKentYapilari from "@/data/raw/antik-kent-yapilari.json";
import antikKentler from "@/data/raw/antik-kentler.json";
import koskVeKonaklar from "@/data/raw/kosk-ve-konaklar.json";
import kuleAnitVeHeykeller from "@/data/raw/kule-anit-ve-heykeller.json";
import muzeler from "@/data/raw/muzeler.json";
import tarihiCarsiVeHanlar from "@/data/raw/tarihi-carsi-ve-hanlar.json";
import tarihiMeydanlar from "@/data/raw/tarihi-meydanlar.json";
import tarihiSuYapilari from "@/data/raw/tarihi-su-yapilari.json";
import tarihiYapilar from "@/data/raw/tarihi-yapilar.json";

import { capitalize } from "./utils";
import type { ParsedLocationData, RawLocationData } from "@/globals";

const DATA_LIST = {
  antikKentYapilari: antikKentYapilari as RawLocationData[],
  antikKentler: antikKentler as RawLocationData[],
  koskVeKonaklar: koskVeKonaklar as RawLocationData[],
  kuleAnitVeHeykeller: kuleAnitVeHeykeller as RawLocationData[],
  tarihiCarsiVeHanlar: tarihiCarsiVeHanlar as RawLocationData[],
  tarihiSuYapilari: tarihiSuYapilari as RawLocationData[],
  tarihiYapilar: tarihiYapilar as RawLocationData[],
  tarihiMeydanlar: tarihiMeydanlar as RawLocationData[],
  muzeler: muzeler as RawLocationData[],
};

class Parser {
  parseLocationData(rawData: RawLocationData[]): ParsedLocationData[] {
    return rawData.map((item) => ({
      isim: capitalize(item.ADI),
      aciklama: item.ACIKLAMA ?? null,
      koordinatlar: {
        enlem: item.ENLEM,
        boylam: item.BOYLAM,
      },
      adres: {
        ilce: capitalize(item.ILCE),
        mahalle: item.MAHALLE ? capitalize(item.MAHALLE) : null,
      },
    }));
  }

  parseAndSave(): void {
    const outputDir = "./src/data/parsed";
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    Object.entries(DATA_LIST).forEach(([key, rawData]) => {
      const parsedData = this.parseLocationData(rawData);
      const filename = `${key}.ts`; // Use meaningful filenames instead of index
      const filepath = path.join(outputDir, filename);

      const keyParts = key.split("-");
      const variableName = keyParts.at(0) + keyParts.slice(1).map(capitalize).join("");

      const fileContent = `import type { ParsedLocationData } from "@/globals";

export const ${variableName}: ParsedLocationData[] = ${JSON.stringify(parsedData, null, 2)};`;

      fs.writeFileSync(filepath, fileContent, "utf-8");
    });
  }
}

const parser = new Parser();

parser.parseAndSave();
