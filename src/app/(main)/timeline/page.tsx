import type { Metadata } from "next";
import { TimelinePage } from "@/features/timeline/components/TimelinePage";

export const metadata: Metadata = {
  title: "KPSS Vatandaşlık Anayasal Süreç Atlası",
  description: "KPSS Vatandaşlık olaylarını görsel, tıklanabilir ve konu bağlantılı profesyonel anayasal süreç ekranında çalış.",
};

export default function TimelineRoute() {
  return <TimelinePage />;
}
