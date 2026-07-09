import { temelhukukQuestions } from "./temel-hukuk-bilgisi";
import { anayasatarihiQuestions } from "./anayasal-gelismeler-ve-devlet";
import { yasamaQuestions } from "./yasama-organi";
import { yurutmeQuestions } from "./yurutme-organi";
import { yargiQuestions } from "./yargi-organi";
import { idarehukukuQuestions } from "./idare-hukuku-yapisi";
import { guncelbilgilerQuestions } from "./guncel-bilgiler-genel";

export const modularQuestions = [
  ...temelhukukQuestions,
  ...anayasatarihiQuestions,
  ...yasamaQuestions,
  ...yurutmeQuestions,
  ...yargiQuestions,
  ...idarehukukuQuestions,
  ...guncelbilgilerQuestions
];

export * from "./temel-hukuk-bilgisi";
export * from "./anayasal-gelismeler-ve-devlet";
export * from "./yasama-organi";
export * from "./yurutme-organi";
export * from "./yargi-organi";
export * from "./idare-hukuku-yapisi";
export * from "./guncel-bilgiler-genel";
