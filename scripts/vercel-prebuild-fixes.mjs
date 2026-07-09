#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const fullPath = (relative) => path.join(root, relative);
const exists = (relative) => fs.existsSync(fullPath(relative));
const read = (relative) => (exists(relative) ? fs.readFileSync(fullPath(relative), "utf8") : null);
const write = (relative, content) => {
  const file = fullPath(relative);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, "utf8");
};
const remove = (relative) => {
  const file = fullPath(relative);
  if (fs.existsSync(file)) fs.rmSync(file, { recursive: true, force: true });
};

function log(message) {
  console.log(`[vercel-prebuild-fixes] ${message}`);
}

function ensureTypedRoutesSafe() {
  const file = "next.config.ts";
  let source = read(file);
  if (!source) return;
  const before = source;
  source = source.replace(/typedRoutes\s*:\s*true/g, "typedRoutes: false");
  if (!/typedRoutes\s*:\s*false/.test(source) && /typescript\s*:\s*\{/.test(source)) {
    source = source.replace(/typescript\s*:\s*\{/, "typescript: {\n    typedRoutes: false,");
  }
  if (source !== before) write(file, source);
  log("typedRoutes ayarı güvenli.");
}

function ensureProxyConvention() {
  const middleware = "src/middleware.ts";
  const proxy = "src/proxy.ts";
  if (exists(middleware) && !exists(proxy)) {
    let source = read(middleware) ?? "";
    source = source.replace(/export\s+function\s+middleware\s*\(/g, "export function proxy(");
    source = source.replace(/export\s+default\s+function\s+middleware\s*\(/g, "export default function proxy(");
    write(proxy, source);
    remove(middleware);
    log("Next 16 uyumu için middleware.ts -> proxy.ts dönüştürüldü.");
    return;
  }
  log("proxy uyumu hazır.");
}

function ensureNoDuplicateManifestRoute() {
  const manifestTs = "src/app/manifest.ts";
  const manifestRoute = "src/app/manifest.webmanifest/route.ts";
  if (exists(manifestTs) && exists(manifestRoute)) {
    remove(manifestRoute);
    log("duplicate manifest.webmanifest route kaldırıldı.");
    return;
  }
  log("duplicate manifest route yok.");
}

function ensureCleanKpssIndex() {
  const file = "src/data/kpss/index.ts";
  if (!exists("src/data/kpss/topics/index.ts") || !exists("src/data/kpss/questions/index.ts")) return;
  const cleanIndex = `import { modularTopics } from "./topics";
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
  const examConfigs = [];
  for (let i = 1; i <= 100; i++) {
    const difficulty = ["kolay", "orta", "zor", "karma"][i % 4];
    const count = [15, 15, 20, 20, 30][i % 5];
    const durationMinutes = [15, 15, 20, 20, 30][i % 5];
    
    let title = \`KPSS Vatandaşlık Deneme Sınavı - \${i}\`;
    if (i === 100) title = "KPSS Vatandaşlık 100. Yıl Özel Denemesi";
    else if (i % 10 === 0) title = \`KPSS Vatandaşlık Altın Deneme - \${i / 10}\`;

    examConfigs.push({
      id: \`deneme-\${i}\`,
      title,
      difficulty,
      durationMinutes,
      count
    });
  }

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
      description: \`KPSS Vatandaşlık müfredatına göre hazırlanan \\\${config.count} soruluk \\\${config.difficulty} seviye deneme provası.\`,
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
      heading: \`📚 Ansiklopedi: \${entry.title}\`,
      body: entry.detailedExplanation,
      bullets: [...entry.keyFacts, \`Sınav İpucu: \${entry.examImportance}\`]
    };
    matchedTopic.summary.push(newSummaryBlock);

    // Inject into Flashcards
    const newFlashcard: Flashcard = {
      id: \`dyn-flash-\${entry.id}\`,
      topicId: matchedTopic.id,
      front: \`[Ansiklopedi] \${entry.title} nedir?\`,
      back: entry.shortDefinition + "\\n\\n" + entry.detailedExplanation,
      hint: \`İpucu: \${entry.examImportance}\`,
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
`;
  const before = read(file);
  if (before !== cleanIndex) write(file, cleanIndex);
  log("modüler kpss/index.ts duplicate export üretmeyecek şekilde hazır.");
}

function ensureKpssHistoryBridgeOrHelpers() {
  const file = "src/data/kpss-history.ts";
  let source = read(file);
  if (!source) return;

  // Modular data exists: keep this as a pure bridge. Never append helpers to this file.
  if (exists("src/data/kpss/index.ts")) {
    const bridge = `export {
  topics,
  questions,
  flashcards,
  timelineEvents,
  glossary,
  exams,
  recommendations,
  getTopicBySlug,
  getTopicById,
  getQuestionsByTopic,
  getFlashcardsByTopic,
  getTimelineEventsByTopic,
  getGlossaryByTopic,
} from "@/data/kpss";
`;
    if (source !== bridge) write(file, bridge);
    log("kpss-history bridge export uyumluluğu hazır.");
    return;
  }

  const before = source;
  source = source.replaceAll("card as Record", "card as unknown as Record");
  const has = (name) => new RegExp(`export\\s+(function|const)\\s+${name}\\b|export\\s*\\{[^}]*\\b${name}\\b[^}]*\\}`, "s").test(source);
  const helpers = [];
  if (!has("getTopicBySlug")) helpers.push(`\nexport function getTopicBySlug(slug: string) {\n  return topics.find((topic) => topic.slug === slug || topic.id === slug);\n}\n`);
  if (!has("getTopicById")) helpers.push(`\nexport function getTopicById(id: string) {\n  return topics.find((topic) => topic.id === id || topic.slug === id);\n}\n`);
  if (!has("getQuestionsByTopic")) helpers.push(`\nexport function getQuestionsByTopic(topicId: string) {\n  return questions.filter((question) => question.topicId === topicId || (question as { topicSlug?: string }).topicSlug === topicId);\n}\n`);
  if (!has("getFlashcardsByTopic")) helpers.push(`\nexport function getFlashcardsByTopic(topicId: string) {\n  return flashcards.filter((card) => card.topicId === topicId || (card as { topicSlug?: string }).topicSlug === topicId);\n}\n`);
  if (!has("getTimelineEventsByTopic")) helpers.push(`\nexport function getTimelineEventsByTopic(topicId: string) {\n  return timelineEvents.filter((event) => event.topicId === topicId || (event as { topicSlug?: string }).topicSlug === topicId);\n}\n`);
  if (helpers.length > 0) source += `\n// Build compatibility helpers added by vercel-prebuild-fixes.mjs.\n${helpers.join("\n")}`;
  if (source !== before) write(file, source);
  log("kpss-history export/cast uyumluluğu hazır.");
}

function ensureSkeletonExports() {
  const file = "src/components/ui/Skeleton.tsx";
  let source = read(file);
  if (!source) return;
  const chunks = [];
  if (!/export\s+function\s+SkeletonGrid/.test(source)) {
    chunks.push(`
export function SkeletonGrid({ count = 8, className = "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", itemClassName = "h-32" }: { count?: number; className?: string; itemClassName?: string }) {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} className={itemClassName} />
      ))}
    </div>
  );
}
`);
  }
  if (!/export\s+function\s+PageSkeleton/.test(source)) {
    chunks.push(`
export function PageSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-40 w-full" />
      <SkeletonGrid />
    </div>
  );
}
`);
  }
  if (chunks.length > 0) write(file, `${source}\n${chunks.join("\n")}`);
  log("Skeleton exportları hazır.");
}

function ensureBrandMarkSizeProp() {
  const file = "src/components/brand/SBBrandMark.tsx";
  let source = read(file);
  if (!source) return;
  if (/size\??\s*:/.test(source) || /size\s*=/.test(source)) {
    log("SBBrandMark size prop uyumu hazır.");
    return;
  }
  source = source.replace(
    /\{\s*className\s*\}:\s*\{\s*className\??:\s*string\s*\}/,
    "{ className, size = 'md' }: { className?: string; size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number }"
  );
  write(file, source);
  log("SBBrandMark size prop guard uygulandı.");
}

ensureTypedRoutesSafe();
ensureProxyConvention();
ensureNoDuplicateManifestRoute();
ensureCleanKpssIndex();
ensureKpssHistoryBridgeOrHelpers();
ensureSkeletonExports();
ensureBrandMarkSizeProp();
log("tamamlandı.");
