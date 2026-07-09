import { temelhukukFlashcards } from "./temel-hukuk-bilgisi";
import { anayasatarihiFlashcards } from "./anayasal-gelismeler-ve-devlet";
import { yasamaFlashcards } from "./yasama-organi";
import { yurutmeFlashcards } from "./yurutme-organi";
import { yargiFlashcards } from "./yargi-organi";
import { idarehukukuFlashcards } from "./idare-hukuku-yapisi";
import { guncelbilgilerFlashcards } from "./guncel-bilgiler-genel";

export const modularFlashcards = [
  ...temelhukukFlashcards,
  ...anayasatarihiFlashcards,
  ...yasamaFlashcards,
  ...yurutmeFlashcards,
  ...yargiFlashcards,
  ...idarehukukuFlashcards,
  ...guncelbilgilerFlashcards
];

export * from "./temel-hukuk-bilgisi";
export * from "./anayasal-gelismeler-ve-devlet";
export * from "./yasama-organi";
export * from "./yurutme-organi";
export * from "./yargi-organi";
export * from "./idare-hukuku-yapisi";
export * from "./guncel-bilgiler-genel";
