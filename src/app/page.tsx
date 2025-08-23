"use client";

import React from "react";

import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/map/index"), { ssr: false });

export default function RootPage() {
  return (
    <main>
      <MapComponent />
    </main>
  );
}
