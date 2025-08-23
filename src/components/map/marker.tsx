"use client";

import React from "react";
import { Marker as LeafletMarker, Tooltip, useMap } from "react-leaflet";

import { Popup } from "@/components/map/popup";

import { getMarkerIcon } from "@/lib/get-marker-icon";

import type { ParsedLocationData } from "@/globals";

function Marker({ location }: { location: ParsedLocationData }) {
  const map = useMap();

  return (
    <LeafletMarker
      position={[location.koordinatlar.enlem, location.koordinatlar.boylam]}
      icon={getMarkerIcon("#8B7EC8")}
      eventHandlers={{
        click: (event) => {
          const location = event.target.getLatLng();
          map.flyToBounds([location]);
        },
      }}>
      <Tooltip direction="bottom">{location.isim}</Tooltip>
      <Popup location={location} />
    </LeafletMarker>
  );
}

export { Marker };
