import type React from "react";

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

interface LocationData {
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

export type { IconType, WrapperProps, ProviderProps, LinkProps, LocationData };
