// import React from "react";

// import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "cmdk";
// import { ChevronDown, FilterIcon } from "lucide-react";

// import { Button, ButtonContainer } from "@/components/base/button";
// import { Checkbox } from "@/components/base/checkbox";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/base/dropdown";
// import { inputVariants } from "@/components/base/input";

// import { capitalize } from "@/lib/utils";

// import { District, districts } from "@/data/districts";

// interface DistrictFilterProps {
//   districtFilters: District[];
//   setDistrictFilters: React.Dispatch<React.SetStateAction<District[]>>;
// }

// export function DistrictFilter({ districtFilters, setDistrictFilters }: DistrictFilterProps) {
//   function handleistrictFiltersUpdate(district: District): void {
//     setDistrictFilters(
//       districtFilters.includes(district)
//         ? districtFilters.filter((d) => d !== district)
//         : [...districtFilters, district],
//     );
//   }

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button className="w-full justify-between border">
//           <div className="flex flex-row items-center justify-start gap-2">
//             <FilterIcon /> İlçelere Göre Filtrele
//           </div>
//           <ChevronDown />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent asChild alignOffset={8}>
//         <Command>
//           <CommandInput placeholder="İlçe ara..." className={inputVariants({ borderRadius: "small" })} />
//           <CommandList className="w-full overflow-y-auto">
//             <CommandEmpty>İlçe bulunamadı...</CommandEmpty>
//             {districts.map((item) => (
//               <CommandItem asChild key={item} value={item} className="w-full">
//                 <ButtonContainer className="px-0">
//                   <Checkbox
//                     defaultChecked={districtFilters.includes(item)}
//                     onCheckedChange={() => handleistrictFiltersUpdate(item)}
//                   />
//                   {capitalize(item)}
//                 </ButtonContainer>
//               </CommandItem>
//             ))}
//           </CommandList>
//         </Command>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
