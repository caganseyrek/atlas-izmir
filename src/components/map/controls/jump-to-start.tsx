"use client";

import React from "react";
import { useMap } from "react-leaflet";

import { FullscreenIcon } from "lucide-react";

import { Button } from "@/components/base/button";

interface JumpToStartControlProps {
  initialCenter: [number, number];
  zoom: number;
}

function JumpToStartControl({ initialCenter, zoom }: JumpToStartControlProps) {
  const map = useMap();

  return (
    <Button
      size="icon"
      className="bg-gray-1 absolute top-[87.6px]! right-4! z-[1000] border"
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();
        map.setView(initialCenter, zoom);
      }}
      title="Haritayı başlangıç konumuna döndür">
      <FullscreenIcon className="size-4 shrink-0" />
      <span className="sr-only">Haritayı başlangıç konumuna döndür</span>
    </Button>
  );
}

export { JumpToStartControl };
