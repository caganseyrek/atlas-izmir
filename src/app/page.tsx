"use client";

import React from "react";

import dynamic from "next/dynamic";

import { LoaderIcon } from "lucide-react";

import { FlexBox } from "@/components/flexbox";

const MapComponent: React.ComponentType<{}> = dynamic(() => import("@/components/map/index"), {
  ssr: false,
  loading: () => (
    <FlexBox className="h-dvh w-dvw justify-center">
      <LoaderIcon className="animate-spin" />
    </FlexBox>
  ),
});

export default function RootPage() {
  return (
    <main>
      <MapComponent />
    </main>
  );
}
