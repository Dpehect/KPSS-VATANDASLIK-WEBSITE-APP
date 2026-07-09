import { modularTopics } from "./topics";
import { modularQuestions } from "./questions";
import { modularFlashcards } from "./flashcards";
import { modularTimelineEvents } from "./timeline";
import { modularGlossary } from "./glossary";
import { loadEncyclopedia } from "./encyclopedia/loader";

import type { Exam, StudyRecommendation, Topic, Flashcard, TopicSummaryBlock } from "@/types/study";

// Generate mock exams dynamically using local questions
const localQuestionsList = modularQuestions || [];
const totalQuestionsCount = localQuestionsList.length;

export const exams: Exam[] = [];

if (totalQuestionsCount > 0) {
  const examConfigs = [
    { id: "deneme-1", title: "KPSS Vatandaşlık Deneme Sınavı - 1", difficulty: "kolay", durationMinutes: 15, count: 15 },
    { id: "deneme-2", title: "KPSS Vatandaşlık Deneme Sınavı - 2", difficulty: "orta", durationMinutes: 15, count: 15 },
    { id: "deneme-3", title: "KPSS Vatandaşlık Deneme Sınavı - 3", difficulty: "zor", durationMinutes: 20, count: 15 },
    { id: "deneme-4", title: "Vatandaşlık Genel Tarama Denemesi", difficulty: "karma", durationMinutes: 25, count: 20 },
    { id: "deneme-5", title: "KPSS Vatandaşlık Şampiyonlar Provası", difficulty: "zor", durationMinutes: 30, count: 30 },
  ];

  examConfigs.forEach((config) => {
    let matchedQuestions = localQuestionsList;
    if (config.difficulty !== "karma") {
      matchedQuestions = localQuestionsList.filter((q) => q.difficulty === config.difficulty);
      if (matchedQuestions.length < config.count) {
        matchedQuestions = localQuestionsList;
      }
    }
    
    // Deterministic shuffle using exam ID as seed
    const shuffled = [...matchedQuestions];
    let seed = config.id.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = (seed + i) % (i + 1);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      seed = (seed * 9301 + 49297) % 233280;
    }

    const selectedIds = shuffled.slice(0, config.count).map((q) => q.id);

    exams.push({
      id: config.id,
      title: config.title,
      description: `KPSS Vatandaşlık müfredatına göre hazırlanan \${config.count} soruluk \${config.difficulty} seviye deneme provası.`,
      durationMinutes: config.durationMinutes,
      questionIds: selectedIds,
      difficulty: config.difficulty,
    } as any);
  });
}

export const recommendations: StudyRecommendation[] = [
  {
    id: "daily-kpss-citizenship-book-flow",
    title: "Bugünün KPSS Vatandaşlık çalışma akışı",
    description: "Bir konu anlatım bloğu oku, 20 soru çöz, 10 flashcard tekrar et.",
    href: "/dashboard",
    minutes: 45,
    priority: "yüksek",
  },
  {
    id: "weak-topic-revision",
    title: "Zayıf konu tamiri",
    description: "Yanlış yaptığın başlığın konu anlatımı, sık hata ve glossary alanlarını tekrar et.",
    href: "/analytics",
    minutes: 25,
    priority: "orta",
  },
];

// 1. Load the encyclopedia data statically
const encyclopediaData = loadEncyclopedia();

// 2. Clone modular arrays to avoid mutating the base exports if they are reused
export const topics: Topic[] = JSON.parse(JSON.stringify(modularTopics));
export const flashcards: Flashcard[] = [...modularFlashcards];
export const questions = modularQuestions;
export const timelineEvents = modularTimelineEvents;
export const glossary = modularGlossary;

// Explicit mapping for encyclopedia entry IDs to Vatandaslik topic IDs
const entryIdToTopicIdMap: Record<string, string> = {
  "hukuk-kurallari": "temel-hukuk",
  "anayasa-mahkemesi": "yargi",
};

// 3. Dynamically inject encyclopedia data into topics and flashcards
encyclopediaData.forEach((entry) => {
  // Find the matching topic by ID mapping, or fallback to category title matching
  const mappedTopicId = entryIdToTopicIdMap[entry.id];
  const matchedTopic = mappedTopicId
    ? topics.find((t) => t.id === mappedTopicId)
    : topics.find((t) => t.title.toLowerCase() === entry.category.toLowerCase());
  
  if (matchedTopic) {
    // Inject into Topic Summaries
    const newSummaryBlock: TopicSummaryBlock = {
      heading: `📚 Ansiklopedi: ${entry.title}`,
      body: entry.detailedExplanation,
      bullets: [...entry.keyFacts, `Sınav İpucu: ${entry.examImportance}`]
    };
    matchedTopic.summary.push(newSummaryBlock);

    // Inject into Flashcards
    const newFlashcard: Flashcard = {
      id: `dyn-flash-${entry.id}`,
      topicId: matchedTopic.id,
      front: `[Ansiklopedi] ${entry.title} nedir?`,
      back: entry.shortDefinition + "\n\n" + entry.detailedExplanation,
      hint: `İpucu: ${entry.examImportance}`,
      tags: ["ansiklopedi", "derin_bilgi", ...entry.keywords.slice(0, 2)]
    };
    flashcards.push(newFlashcard);
  }
});

function normalize(value: string) {
  return value.trim().toLocaleLowerCase("tr-TR");
}

export function getTopicBySlug(slug: string) {
  const key = normalize(slug);
  return topics.find((topic) => normalize(topic.slug) === key || normalize(topic.id) === key);
}

export function getTopicById(id: string) {
  const key = normalize(id);
  return topics.find((topic) => normalize(topic.id) === key || normalize(topic.slug) === key);
}

export function getQuestionsByTopic(topicId: string) {
  const topic = getTopicById(topicId);
  const id = topic?.id ?? topicId;
  const slug = topic?.slug ?? topicId;
  return questions.filter((question) => {
    const topicSlug = (question as { topicSlug?: string }).topicSlug;
    return question.topicId === id || topicSlug === slug || topicSlug === id || question.topicId === slug;
  });
}

export function getFlashcardsByTopic(topicId: string) {
  const topic = getTopicById(topicId);
  const id = topic?.id ?? topicId;
  const slug = topic?.slug ?? topicId;
  return flashcards.filter((card) => {
    const topicSlug = (card as { topicSlug?: string }).topicSlug;
    return card.topicId === id || topicSlug === slug || topicSlug === id || card.topicId === slug;
  });
}

export function getTimelineEventsByTopic(topicId: string) {
  const topic = getTopicById(topicId);
  const id = topic?.id ?? topicId;
  const slug = topic?.slug ?? topicId;
  return timelineEvents.filter((event) => {
    const topicSlug = (event as { topicSlug?: string }).topicSlug;
    return event.topicId === id || topicSlug === slug || topicSlug === id || event.topicId === slug;
  });
}

export function getGlossaryByTopic(topicId: string) {
  const topic = getTopicById(topicId);
  const id = topic?.id ?? topicId;
  const slug = topic?.slug ?? topicId;
  return glossary.filter((item) => {
    const topicSlug = (item as { topicSlug?: string }).topicSlug;
    const period = (item as { period?: string }).period;
    return item.topicId === id || item.topicId === slug || topicSlug === slug || topicSlug === id || period === topic?.title;
  });
}

export const modularData = { topics, questions, flashcards, timelineEvents, glossary, exams, recommendations };
export { modularTopics, modularQuestions, modularFlashcards, modularTimelineEvents, modularGlossary };
