"use client";

import React from "react";
import { useMap } from "react-leaflet";

import { MinusIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/base/button";

import { FlexBox } from "@/components/flexbox";

function ZoomControls() {
  const map = useMap();

  return (
    <FlexBox asColumn className="absolute top-4! right-4! z-[1000] w-fit gap-0">
      <Button
        size="icon"
        className="bg-gray-1 rounded-b-none border border-b-0"
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
          map.zoomIn();
        }}
        title="Yakınlaştır">
        <PlusIcon className="size-4 shrink-0" />
        <span className="sr-only">Yakınlaştır</span>
      </Button>

      <Button
        size="icon"
        className="bg-gray-1 rounded-t-none border border-t-0"
        onClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
          map.zoomOut();
        }}
        title="Uzaklaştır">
        <MinusIcon className="size-4 shrink-0" />
        <span className="sr-only">Uzaklaştır</span>
      </Button>
    </FlexBox>
  );
}

export { ZoomControls };
