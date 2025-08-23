"use client";

import React from "react";
import { FeatureGroup, LayersControl, MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { Marker } from "@/components/map/marker";

import { dataCategories } from "@/data";

const initialSelections = ["muzeler"];

export default function Map() {
  return (
    <MapContainer center={[38.575, 27.125]} zoom={9} className="h-dvh w-full">
      <LayersControl position="topright" collapsed={false}>
        <TileLayer
          attribution="&copy; <a href='http://osm.org'>OpenStreetMap</a> contributors. Veriler <a href='https://acikveri.bizizmir.com/tr'>Bizİzmir Açık Veri Portalı</a> üzerinden sağlanmaktadır ve <a href='https://acikveri.bizizmir.com/tr/license'>CC BY 4.0</a> lisansı altındadır."
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {dataCategories.map((category) => (
          <LayersControl.Overlay
            key={category.key}
            name={category.title}
            checked={initialSelections.includes(category.key)}>
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
  );
}
