import { temelhukukTopic } from "./temel-hukuk-bilgisi";
import { anayasatarihiTopic } from "./anayasal-gelismeler-ve-devlet";
import { yasamaTopic } from "./yasama";
import { yurutmeTopic } from "./yurutme";
import { yargiTopic } from "./yargi";
import { idarehukukuTopic } from "./idare-hukuku";
import { guncelbilgilerTopic } from "./guncel-bilgiler";

export const modularTopics = [
  temelhukukTopic,
  anayasatarihiTopic,
  yasamaTopic,
  yurutmeTopic,
  yargiTopic,
  idarehukukuTopic,
  guncelbilgilerTopic
];

export * from "./temel-hukuk-bilgisi";
export * from "./anayasal-gelismeler-ve-devlet";
export * from "./yasama";
export * from "./yurutme";
export * from "./yargi";
export * from "./idare-hukuku";
export * from "./guncel-bilgiler";
