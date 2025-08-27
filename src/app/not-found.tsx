import React from "react";

import { PackageOpenIcon } from "lucide-react";

import { FlexBox } from "@/components/flexbox";

export default function NotFoundPage() {
  return (
    <FlexBox asColumn className="h-dvh w-dvw justify-center gap-3">
      <FlexBox className="bg-gray-2 rounded-full border-2 p-2">
        <PackageOpenIcon className="text-foreground-darker size-5 shrink-0" />
      </FlexBox>
      <FlexBox asColumn className="gap-1">
        <h2 className="text-lg! leading-none font-medium tracking-tight">Sayfa Bulunamadı</h2>
        <span>Bu adreste bir sayfa bulamadık.</span>
      </FlexBox>
    </FlexBox>
  );
}
