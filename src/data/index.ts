import { antikKentYapilari } from "@/data/parsed/antik-kent-yapilari";
import { antikKentler } from "@/data/parsed/antik-kentler";
import { koskVeKonaklar } from "@/data/parsed/kosk-ve-konaklar";
import { kuleAnitVeHeykeller } from "@/data/parsed/kule-anit-ve-heykeller";
import { muzeler } from "@/data/parsed/muzeler";
import { tarihiCarsiVeHanlar } from "@/data/parsed/tarihi-carsi-ve-hanlar";
import { tarihiMeydanlar } from "@/data/parsed/tarihi-meydanlar";
import { tarihiSuYapilari } from "@/data/parsed/tarihi-su-yapilari";
import { tarihiYapilar } from "@/data/parsed/tarihi-yapilar";

import type { ParsedLocationData } from "@/globals";

interface DataCategoriesProps {
  key: string;
  title: string;
  color: string;
  data: ParsedLocationData[];
}

const dataCategories: DataCategoriesProps[] = [
  {
    key: "muzeler",
    title: "Müzeler",
    color: "#8B7EC8",
    data: muzeler,
  },
  {
    key: "tarihiYapilar",
    title: "Tarihi Yapılar",
    color: "#E87B7B",
    data: tarihiYapilar,
  },
  {
    key: "tarihiSuYapilari",
    title: "Tarihi Su Yapıları",
    color: "#6BB6C7",
    data: tarihiSuYapilari,
  },
  {
    key: "tarihiCarsiVeHanlar",
    title: "Tarihi Çarşı ve Hanlar",
    color: "#C4A484",
    data: tarihiCarsiVeHanlar,
  },
  {
    key: "koskVeKonaklar",
    title: "Köşk ve Konaklar",
    color: "#A8C686",
    data: koskVeKonaklar,
  },
  {
    key: "antikKentler",
    title: "Antik Kentler",
    color: "#E6A85C",
    data: antikKentler,
  },
  {
    key: "antikKentYapilari",
    title: "Antik Kent Yapıları",
    color: "#D4A5D4",
    data: antikKentYapilari,
  },
  {
    key: "kuleAnitVeHeykeller",
    title: "Kule, Anıt ve Heykeller",
    color: "#7BA3CC",
    data: kuleAnitVeHeykeller,
  },
  {
    key: "tarihiMeydanlar",
    title: "Tarihi Meydanlar",
    color: "#B8A67D",
    data: tarihiMeydanlar,
  },
];

export { dataCategories };
