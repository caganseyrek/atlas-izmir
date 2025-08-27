"use client";

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import { GroupControls } from "@/components/map/controls/group-controls";
import { JumpToStartControl } from "@/components/map/controls/jump-to-start";
import { ZoomControls } from "@/components/map/controls/zoom-controls";

import { Marker } from "@/components/map/marker";

import { Placeholder } from "@/components/map/placeholder";

import { dataCategories, type DataCategoryProps } from "@/data/categories";

const center: [number, number] = [38.575, 27.125] as const;
const zoom: number = 9 as const;

export default function Map() {
  const [selectedCategories, setSelectedCategories] = React.useState<DataCategoryProps[]>([dataCategories[0]]);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      zoomControl={false}
      placeholder={<Placeholder />}
      className="h-dvh w-full">
      <TileLayer
        attribution="&copy; <a href='http://osm.org'>OpenStreetMap</a> contributors. Veriler <a href='https://acikveri.bizizmir.com/tr'>Bizİzmir Açık Veri Portalı</a> üzerinden sağlanmaktadır ve <a href='https://acikveri.bizizmir.com/tr/license'>CC BY 4.0</a> lisansı altındadır."
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <GroupControls selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />

      {selectedCategories.map((category) =>
        category.locations.map((location) => (
          <Marker
            key={location.isim + "-" + location.adres.ilce + "-" + String(location.adres.mahalle)}
            location={location}
            categoryName={category.title}
            backgroundColorCode={category.colors.markerBackground}
          />
        )),
      )}

      <ZoomControls />
      <JumpToStartControl initialCenter={center} zoom={zoom} />
    </MapContainer>
  );
}
