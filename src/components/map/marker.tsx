"use client";

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Marker as LeafletMarker, Tooltip, useMap } from "react-leaflet";

import L from "leaflet";

import { Popup } from "@/components/map/popup";

import type { LocationData } from "@/types";

interface MarkerProps {
  categoryName: string;
  location: LocationData;
  backgroundColorCode: string;
}

function Marker({ categoryName, location, backgroundColorCode: colorCode }: MarkerProps) {
  const map = useMap();

  const icon = new L.DivIcon({
    className: "text",
    html: renderToStaticMarkup(
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="marker">
        <path
          fillOpacity=".25"
          d="M16 32s1.427-9.585 3.761-12.025c4.595-4.805 8.685-.99 8.685-.99s4.044 3.964-.526 8.743C25.514 30.245 16 32 16 32z"
        />
        <path
          fill={colorCode}
          stroke="#fff"
          d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6a4 4 0 100 8 4 4 0 000-8z"
        />
      </svg>,
    ),
    iconSize: [40, 40],
    iconAnchor: [12, 24],
    popupAnchor: [8, -16],
    tooltipAnchor: [8, 16],
  });

  return (
    <LeafletMarker
      position={[location.koordinatlar.enlem, location.koordinatlar.boylam]}
      icon={icon}
      eventHandlers={{
        click: (event) => {
          const location = event.target.getLatLng();
          console.log(location);
          map.flyToBounds([location], { maxZoom: map.getZoom() > 12 ? map.getZoom() : 12 });
        },
      }}>
      <Tooltip direction="bottom">
        {location.isim} <b>({categoryName})</b>
      </Tooltip>
      <Popup location={location} />
    </LeafletMarker>
  );
}

export { Marker };
