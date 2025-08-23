"use client";

import React from "react";
import { FeatureGroup, LayersControl, MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { Marker } from "@/components/marker";

import { dataCategories } from "@/data";

export default function RootPage() {
  return (
    <main>
      <MapContainer center={[38.575, 27.125]} zoom={9} className="h-dvh w-full">
        <LayersControl position="topright" collapsed={false}>
          <TileLayer
            attribution="&copy; <a href='http://osm.org'>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {dataCategories.map((category) => (
            <LayersControl.Overlay key={category.key} name={category.title}>
              <FeatureGroup>
                {category.data.map((location) => (
                  <Marker
                    key={location.isim + "-" + location.adres.ilce + "-" + String(location.adres.mahalle)}
                    location={location}
                  />
                ))}
              </FeatureGroup>
            </LayersControl.Overlay>
          ))}
        </LayersControl>
      </MapContainer>
    </main>
  );
}
