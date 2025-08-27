"use client";

import React from "react";

import { MenuIcon } from "lucide-react";

import { Button } from "@/components/base/button";
import { Checkbox } from "@/components/base/checkbox";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/base/dropdown";
import { Separator } from "@/components/base/separator";

import { FlexBox } from "@/components/flexbox";

import { useIsMobile } from "@/hooks/use-is-mobile";

import { dataCategories, type DataCategoryProps } from "@/data/categories";

interface GroupControlsProps {
  selectedCategories: DataCategoryProps[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<DataCategoryProps[]>>;
}

function GroupControls({ selectedCategories, setSelectedCategories }: GroupControlsProps) {
  const isMobile = useIsMobile();

  function handleCheckedChange(category: DataCategoryProps): void {
    setSelectedCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category],
    );
  }

  function Logo() {
    return (
      <h1 className="w-full items-start gap-3 p-3 font-['Ancizar_Serif']! text-2xl leading-none font-bold tracking-tight">
        Atlas İzmir
      </h1>
    );
  }

  function Checkboxes() {
    return (
      <FlexBox asColumn className="w-full items-start gap-1 p-3">
        {dataCategories.map((category) => (
          <FlexBox key={category.title}>
            <Checkbox
              id={category.title}
              checked={selectedCategories.includes(category)}
              onCheckedChange={() => handleCheckedChange(category)}
              style={{ backgroundColor: category.colors.checkboxBackground }}
            />
            <label htmlFor={category.title} className="text-sm">
              {category.title}
            </label>
          </FlexBox>
        ))}
      </FlexBox>
    );
  }

  if (isMobile) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" className="bg-gray-1 absolute top-4! left-4! z-[1000] border">
            <MenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="z-[2000] w-[230px] max-w-[230px] min-w-[230px]" align="start">
          <Logo />
          <Separator />
          <Checkboxes />
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <FlexBox className="absolute top-4! left-4! z-[1000] items-start gap-3">
      <FlexBox
        className="bg-gray-1 w-[230px] max-w-[230px] min-w-[230px] items-start gap-0 rounded-sm border transition-all"
        asColumn>
        <Logo />
        <Separator />
        <Checkboxes />
      </FlexBox>
    </FlexBox>
  );
}

export { GroupControls };
