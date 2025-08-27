"use client";

import React from "react";

import { CloudAlertIcon } from "lucide-react";

import { FlexBox } from "@/components/flexbox";

export default function ErrorPage() {
  return (
    <FlexBox asColumn className="h-dvh w-dvw justify-center gap-3">
      <FlexBox className="bg-gray-2 rounded-full border-2 p-2">
        <CloudAlertIcon className="text-foreground-darker size-5 shrink-0" />
      </FlexBox>
      <FlexBox asColumn className="gap-1">
        <h2 className="text-lg! leading-none font-medium tracking-tight">Bir Hata Oluştu</h2>
        <span>Bir hata ile karşılaştık. Bunun için çok üzgünüz.</span>
      </FlexBox>
    </FlexBox>
  );
}
