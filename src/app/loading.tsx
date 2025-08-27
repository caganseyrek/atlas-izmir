import React from "react";

import { LoaderIcon } from "lucide-react";

import { FlexBox } from "@/components/flexbox";

export default function LoadingPage() {
  return (
    <FlexBox asColumn className="h-dvh w-dvw justify-center">
      <LoaderIcon className="animate-spin" />
    </FlexBox>
  );
}
