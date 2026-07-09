import { temelhukukGlossary } from "./temel-hukuk-bilgisi";
import { anayasatarihiGlossary } from "./anayasal-gelismeler-ve-devlet";
import { yasamaGlossary } from "./yasama-organi";
import { yurutmeGlossary } from "./yurutme-organi";
import { yargiGlossary } from "./yargi-organi";
import { idarehukukuGlossary } from "./idare-hukuku-yapisi";
import { guncelbilgilerGlossary } from "./guncel-bilgiler-genel";

export const modularGlossary = [
  ...temelhukukGlossary,
  ...anayasatarihiGlossary,
  ...yasamaGlossary,
  ...yurutmeGlossary,
  ...yargiGlossary,
  ...idarehukukuGlossary,
  ...guncelbilgilerGlossary
];

export * from "./temel-hukuk-bilgisi";
export * from "./anayasal-gelismeler-ve-devlet";
export * from "./yasama-organi";
export * from "./yurutme-organi";
export * from "./yargi-organi";
export * from "./idare-hukuku-yapisi";
export * from "./guncel-bilgiler-genel";
