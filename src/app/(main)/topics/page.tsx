import type { Metadata } from "next";
import { TopicsPage } from "@/features/topics/components/TopicsPage";

export const metadata: Metadata = {
  title: "KPSS Vatandaşlık Konu Akademisi",
  description: "KPSS Vatandaşlık konularını derin anlatım, kavram ilişkisi, anayasal süreç, sık hata ve açıklamalı test akışıyla çalış.",
};

export default function TopicsRoute() {
  return <TopicsPage />;
}
