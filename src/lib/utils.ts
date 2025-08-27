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

  const match = input.match(/^([^a-zA-ZçğıöşüÇĞIİÖŞÜ]*)([a-zA-ZçğıöşüÇĞIİÖŞÜ])/);
  if (match) {
    const [, prefix, firstLetter] = match;
    return prefix + firstLetter.toLocaleUpperCase("tr-TR") + input.slice(prefix.length + 1).toLocaleLowerCase("tr-TR");
  }

  return input.toLocaleLowerCase("tr-TR");
}

export { cn, capitalize };
