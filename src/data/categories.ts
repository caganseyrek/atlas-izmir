import { antikKentYapilari } from "@/data/parsed/antik-kent-yapilari";
import { antikKentler } from "@/data/parsed/antik-kentler";
import { koskVeKonaklar } from "@/data/parsed/kosk-ve-konaklar";
import { kuleAnitVeHeykeller } from "@/data/parsed/kule-anit-ve-heykeller";
import { muzeler } from "@/data/parsed/muzeler";
import { tarihiCarsiVeHanlar } from "@/data/parsed/tarihi-carsi-ve-hanlar";
import { tarihiMeydanlar } from "@/data/parsed/tarihi-meydanlar";
import { tarihiSuYapilari } from "@/data/parsed/tarihi-su-yapilari";
import { tarihiYapilar } from "@/data/parsed/tarihi-yapilar";

import type { LocationData } from "@/types";

interface DataCategoryProps {
  readonly title: string;
  readonly locations: LocationData[];
  readonly colors: {
    readonly markerBackground: string;
    readonly checkboxBackground: string;
  };
}

const dataCategories: DataCategoryProps[] = [
  {
    title: "Müzeler",
    locations: muzeler,
    colors: {
      markerBackground: "#E63946",
      checkboxBackground: "#B22430",
    },
  },
  {
    title: "Tarihi Yapılar",
    locations: tarihiYapilar,
    colors: {
      markerBackground: "#FFD43B",
      checkboxBackground: "#C99700",
    },
  },
  {
    title: "Tarihi Su Yapıları",
    locations: tarihiSuYapilari,
    colors: {
      markerBackground: "#1D3557",
      checkboxBackground: "#14233A",
    },
  },
  {
    title: "Tarihi Çarşı ve Hanlar",
    locations: tarihiCarsiVeHanlar,
    colors: {
      markerBackground: "#06D6A0",
      checkboxBackground: "#049673",
    },
  },
  {
    title: "Köşk ve Konaklar",
    locations: koskVeKonaklar,
    colors: {
      markerBackground: "#2A9D8F",
      checkboxBackground: "#1F6F65",
    },
  },
  {
    title: "Antik Kentler",
    locations: antikKentler,
    colors: {
      markerBackground: "#7209B7",
      checkboxBackground: "#4F0781",
    },
  },
  {
    title: "Antik Kent Yapıları",
    locations: antikKentYapilari,
    colors: {
      markerBackground: "#4361EE",
      checkboxBackground: "#2F45A3",
    },
  },
  {
    title: "Kule, Anıt ve Heykeller",
    locations: kuleAnitVeHeykeller,
    colors: {
      markerBackground: "#E76F51",
      checkboxBackground: "#B4492B",
    },
  },
  {
    title: "Tarihi Meydanlar",
    locations: tarihiMeydanlar,
    colors: {
      markerBackground: "#80B918",
      checkboxBackground: "#5A7F12",
    },
  },
] as const;

export { dataCategories, type DataCategoryProps };
