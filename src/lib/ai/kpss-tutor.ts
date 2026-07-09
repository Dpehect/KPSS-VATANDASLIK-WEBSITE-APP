import { searchLocalEncyclopedia } from "@/lib/search";

type ChatRole = "user" | "bot" | "assistant" | "model";
export type KpssTutorHistoryItem = { role?: ChatRole; text?: string; content?: string };
export type TutorSource = { type: "Supabase" | "LLM" | "Öğretmen" | "Doğrudan Bilgi"; title: string; href?: string; score?: number };
export type KpssTutorAnswer = {
  reply: string;
  answer: string;
  source: "site-knowledge" | "direct-fact" | "llm" | "local-teacher";
  sourceMode: "site-knowledge" | "direct-fact" | "llm" | "local-teacher";
  confidence: number;
  matchedTitle?: string;
  sources: TutorSource[];
};

type TutorOptions = { history?: KpssTutorHistoryItem[] };

type DirectFact = { aliases: string[]; title: string; answer: string; examTip: string };

const DIRECT_FACTS: DirectFact[] = [
  {
    aliases: ["anayasa mahkemesi uye", "anayasa mahkemesi kac uye", "aym uye sayisi", "aym kac uye"],
    title: "Anayasa Mahkemesi Üye Sayısı",
    answer: "Anayasa Mahkemesi üye sayısı 15'tir. Bu üyelerin 3'ünü TBMM (2 Sayıştay, 1 baro başkanları arasından), 12'sini ise Cumhurbaşkanı doğrudan seçer.",
    examTip: "KPSS'de üyelerin kim tarafından seçildiği sıklıkla sorulur. 3 üye TBMM, 12 üye Cumhurbaşkanı."
  },
  {
    aliases: ["cumhurbaşkanı secilme yasi", "cumhurbackani secilme sartlari", "cb yasi", "cumhurbaşkanı secilme sartlari"],
    title: "Cumhurbaşkanı Seçilme Şartları",
    answer: "Cumhurbaşkanı seçilebilmek için: Türk vatandaşı olmak, 40 yaşını doldurmuş olmak, yükseköğrenim yapmış olmak, milletvekili seçilme yeterliliğine sahip olmak ve en son yapılan genel seçimlerde toplam geçerli oyların tek başına veya birlikte en az %5'ini almış olan siyasi partiler veya en az 100 bin seçmen tarafından aday gösterilmiş olmak gerekir.",
    examTip: "Yaş şartı (40) ve yükseköğrenim mezuniyeti KPSS'de en çok çeldirici olarak kullanılan şartlardır."
  },
  {
    aliases: ["milletvekili secilme yasi", "milletvekili secilme sartlari", "mv secilme yasi", "milletvekili secilme yasi"],
    title: "Milletvekili Seçilme Şartları",
    answer: "Milletvekili seçilebilmek için: Türk vatandaşı olmak, 18 yaşını doldurmuş olmak, en az ilkokul mezunu olmak, askerlikle ilişiği bulunmamak, kamu hizmetlerinden yasaklı olmamak ve taksirli suçlar hariç toplam 1 yıl veya daha fazla hapis cezası almamış olmak gerekir.",
    examTip: "Milletvekili seçilme yaşı 2017 anayasa değişikliği ile 18'e düşürülmüştür. Askerlik şartı ise 'askerlikle ilişiği bulunmamak' şeklindedir."
  },
  {
    aliases: ["tbmm uye sayisi", "kac milletvekili", "milletvekili sayisi", "tbmm uye"],
    title: "TBMM Üye Sayısı",
    answer: "TBMM üye sayısı 600 milletvekilidir. Bu sayı 2017 anayasa değişikliği ile 550'den 600'e çıkarılmıştır.",
    examTip: "Üye tamsayısı (600), anayasa değişiklikleri ve karar yeter sayıları hesaplanırken temel alınır."
  }
];

function normalize(value: string) {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/[ıİ]/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findDirectFact(message: string) {
  const normalized = normalize(message);
  return DIRECT_FACTS.find((fact) => fact.aliases.some((alias) => normalized.includes(normalize(alias))));
}

function directAnswer(fact: DirectFact): KpssTutorAnswer {
  const reply = [`**${fact.title}**`, "", fact.answer, "", `**KPSS ipucu:** ${fact.examTip}`].join("\n");
  return { reply, answer: reply, source: "direct-fact", sourceMode: "direct-fact", confidence: 0.98, matchedTitle: fact.title, sources: [{ type: "Doğrudan Bilgi", title: fact.title }] };
}

export async function answerKpssQuestion(message: string, options: TutorOptions = {}): Promise<KpssTutorAnswer> {
  const clean = message.trim();
  if (!clean) {
    const reply = "Ben sadece KPSS Vatandaşlık konu/kavram tanımları ve 'nedir' tarzı bilgi sorularına cevap verebilirim. Lütfen öğrenmek istediğiniz kavramı (örn: 'yasama dokunulmazlığı nedir' veya 'anayasa mahkemesi') yazın.";
    return { reply, answer: reply, source: "local-teacher", sourceMode: "local-teacher", confidence: 0.5, sources: [{ type: "Öğretmen", title: "Karşılama" }] };
  }
  
  const greeting = ["selam", "merhaba", "slm", "mrb", "günaydın", "iyi akşamlar", "iyi aksamlar"].includes(normalize(clean));
  if (greeting) {
    const reply = "Merhaba! Ben KPSS Vatandaşlık Rehberi'yim. **[UYARI: Ben sadece konu/kavram tanımları ve 'nedir' tarzı bilgi sorularına cevap verebilirim.]** Sormak istediğiniz KPSS Vatandaşlık kavramını (örn: 'idari vesayet nedir?') yazın, veritabanından tarayıp açıklayayım.";
    return { reply, answer: reply, source: "local-teacher", sourceMode: "local-teacher", confidence: 0.9, sources: [{ type: "Öğretmen", title: "Karşılama" }] };
  }

  // Check if it's a "nedir" style question
  const lowerQuery = clean.toLowerCase();
  const isDefinitionQuery = 
    lowerQuery.includes("nedir") || 
    lowerQuery.includes("kimdir") || 
    lowerQuery.includes("nelerdir") || 
    lowerQuery.includes("nasıldır") || 
    lowerQuery.includes("nasildir") || 
    lowerQuery.includes("kaçtır") || 
    lowerQuery.includes("kactir") || 
    lowerQuery.includes("ne demek") || 
    lowerQuery.includes("tanımı") || 
    lowerQuery.includes("tanimi") || 
    lowerQuery.includes("hakkında") || 
    lowerQuery.includes("hakkinda") || 
    lowerQuery.includes("şartları") || 
    lowerQuery.includes("sartlari") ||
    lowerQuery.length < 20; // Short queries like "idari vesayet" are considered definition searches

  if (!isDefinitionQuery) {
    const reply = "Bu chatbot sadece KPSS Vatandaşlık konuları ve 'nedir' tarzı bilgi sorularına yanıt verecek şekilde sınırlandırılmıştır. Lütfen doğrudan öğrenmek istediğiniz anayasal/hukuki kavramı (örn: 'hükümsüzlük nedir?') sorunuz.";
    return { reply, answer: reply, source: "local-teacher", sourceMode: "local-teacher", confidence: 0.8, sources: [{ type: "Öğretmen", title: "Sınırlama Uyarısı" }] };
  }

  const direct = findDirectFact(clean);
  if (direct) {
    const ans = directAnswer(direct);
    ans.reply = `[Kaynak: Doğrudan Bilgi]\n\n${ans.reply}`;
    return ans;
  }

  const localSearch = searchLocalEncyclopedia(clean);
  if (localSearch) {
    const ans = localSearch as KpssTutorAnswer;
    ans.reply = `[Kaynak Konu: ${ans.matchedTitle || "Vatandaşlık Bilgisi"}]\n\n${ans.reply}`;
    return ans;
  }
  
  const reply = "Aradığınız kavramı veritabanımızda bulamadım. Bu rehber sadece KPSS Vatandaşlık konu/kavram tanımları ve 'nedir' tarzı bilgi sorularına cevap verebilir. Lütfen aramanızı daha net bir kavramla (örn: 'idari vesayet') tekrar deneyin.";
  return { reply, answer: reply, source: "local-teacher", sourceMode: "local-teacher", confidence: 0.1, sources: [{ type: "Öğretmen", title: "Sonuç Bulunamadı" }] };
}

export async function answerKpssTutor(message: string, options: TutorOptions = {}) {
  return answerKpssQuestion(message, options);
}
