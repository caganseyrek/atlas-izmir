import React from "react";

import { Checkbox } from "@/components/base/checkbox";
import { Separator } from "@/components/base/separator";

import { FlexBox } from "@/components/flexbox";

import { dataCategories, type DataCategoryProps } from "@/data/categories";

interface SidebarProps {
  selectedCategories: DataCategoryProps[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<DataCategoryProps[]>>;
}

function Sidebar({ selectedCategories, setSelectedCategories }: SidebarProps) {
  
  function handleCheckedChange(category: DataCategoryProps): void {
    setSelectedCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category],
    );
  }

  return (
    <FlexBox className="absolute top-4! left-4! z-[1000] items-start gap-3">
      <FlexBox
        className="bg-gray-1 w-[250px] max-w-[250px] min-w-[250px] items-start gap-0 rounded-sm border transition-all"
        asColumn>
        <h1 className="w-full items-start gap-3 p-3 font-['Ancizar_Serif']! text-2xl leading-none font-bold tracking-tight">
          Atlas İzmir
        </h1>

        <Separator />

        <FlexBox asColumn className="w-full items-start gap-1 p-3">
          {dataCategories.map((category) => (
            <FlexBox key={category.title}>
              <Checkbox
                id={category.title}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCheckedChange(category)}
                style={{ backgroundColor: category.colors.checkboxBackground }}
              />
              <label htmlFor={category.title}>{category.title}</label>
            </FlexBox>
          ))}
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}

export { Sidebar };
