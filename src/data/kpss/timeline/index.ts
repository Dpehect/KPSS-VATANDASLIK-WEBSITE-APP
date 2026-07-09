import { temelhukukTimeline } from "./temel-hukuk-bilgisi";
import { anayasatarihiTimeline } from "./anayasal-gelismeler-ve-devlet";
import { yasamaTimeline } from "./yasama-organi";
import { yurutmeTimeline } from "./yurutme-organi";
import { yargiTimeline } from "./yargi-organi";
import { idarehukukuTimeline } from "./idare-hukuku-yapisi";
import { guncelbilgilerTimeline } from "./guncel-bilgiler-genel";

export const modularTimelineEvents = [
  ...temelhukukTimeline,
  ...anayasatarihiTimeline,
  ...yasamaTimeline,
  ...yurutmeTimeline,
  ...yargiTimeline,
  ...idarehukukuTimeline,
  ...guncelbilgilerTimeline
];

export * from "./temel-hukuk-bilgisi";
export * from "./anayasal-gelismeler-ve-devlet";
export * from "./yasama-organi";
export * from "./yurutme-organi";
export * from "./yargi-organi";
export * from "./idare-hukuku-yapisi";
export * from "./guncel-bilgiler-genel";
