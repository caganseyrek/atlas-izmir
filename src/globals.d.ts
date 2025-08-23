import React from "react";

import type { LucideProps } from "lucide-react";

type IconType = React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;

interface WrapperProps {
  className?: string;
  children?: React.ReactNode;
}

interface ProviderProps<TProvided> {
  renderChildren: (provided: TProvided) => React.ReactNode;
}

interface LinkProps {
  key: string;
  title: string;
  link: string;
  icon: IconType;
}

interface RawLocationData {
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

interface ParsedLocationData {
  isim: string;
  aciklama: string | null;
  koordinatlar: {
    enlem: number;
    boylam: number;
  };
  adres: {
    ilce: string;
    mahalle: string | null;
  };
}

export type { IconType, WrapperProps, ProviderProps, LinkProps, RawLocationData, ParsedLocationData };
