import React from "react";
import { Popup as LeafletPopup } from "react-leaflet";

import { MapPinIcon } from "lucide-react";

import { Separator } from "@/components/base/separator";

import { FlexBox } from "@/components/flexbox";

import type { LocationData } from "@/types";

interface PopupProps {
  location: LocationData;
}

function Popup({ location }: PopupProps) {
  return (
    <LeafletPopup>
      <FlexBox asColumn className="items-start gap-0.5 pr-6 text-wrap">
        <h3 className="text-foreground! text-base font-bold">{location.isim}</h3>

        {location.adres && (
          <FlexBox>
            <MapPinIcon className="size-4 shrink-0" />{" "}
            {location.adres.ilce +
              (location.adres.mahalle && location.adres.mahalle !== location.adres.ilce
                ? ", " + location.adres.mahalle + " Mahallesi"
                : "")}
          </FlexBox>
        )}
      </FlexBox>

      {location.aciklama && (
        <>
          <Separator />
          <FlexBox className="w-full items-start overflow-y-scroll pr-2 text-wrap">{location.aciklama}</FlexBox>
        </>
      )}
    </LeafletPopup>
  );
}

export { Popup };
