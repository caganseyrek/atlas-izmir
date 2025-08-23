import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

function capitalize(input: string): string {
  if (!input || !input.trim()) return "";
  if (input.length === 1) return input.toLocaleUpperCase("tr-TR");

  const words = input.split(" ");
  if (words.length > 1) {
    return words.map(capitalize).join(" ");
  }
  return input.charAt(0).toLocaleUpperCase("tr-TR") + input.slice(1).toLocaleLowerCase("tr-TR");
}

export { cn, capitalize };
