import type { Metadata } from "next";
import { QuestionBankPage } from "@/features/question-bank/components/QuestionBankPage";

export const metadata: Metadata = {
  title: "KPSS Vatandaşlık Soru Bankası",
  description: "KPSS Vatandaşlık konularına göre ayrılmış kolay, orta, zor seviyeli açıklamalı 30 soruluk testler.",
};

export default function QuestionBankRoute() {
  return <QuestionBankPage />;
}
