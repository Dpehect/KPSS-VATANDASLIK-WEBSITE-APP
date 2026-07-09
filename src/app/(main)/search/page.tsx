import type { Metadata } from "next";
import { SearchPage } from "@/features/search/components/SearchPage";

export const metadata: Metadata = {
  title: "Arama",
  description: "KPSS Vatandaşlık Akademi içinde konu, kavram, soru ve flashcard ara."
};

export default function SearchRoute() {
  return <SearchPage />;
}
