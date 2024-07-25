function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
}

// *****************************************
function capitalize(str: string): string {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// *****************************************
import type { MarkdownHeading } from "astro";

export interface TocItem extends MarkdownHeading {
  subheadings: TocItem[];
}

function buildToc(headings: MarkdownHeading[]): TocItem[] {
  const toc: TocItem[] = [];
  const parentHeadings = new Map();
  headings.forEach((h) => {
    const heading: TocItem = { ...h, subheadings: [] };
    parentHeadings.set(heading.depth, heading);
    // Change 2 to 1 if your markdown includes your <h1>
    if (heading.depth === 2) {
      toc.push(heading);
    } else {
      parentHeadings.get(heading.depth - 1).subheadings.push(heading);
    }
  });
  return toc;
}

// *****************************************
function customReadingTime(markdown: string) {
  // Regex to find words and LaTeX blocks
  const words = markdown.match(/\b\w+\b/g) || [];
  const latexBlocks = markdown.match(/\$\$[\s\S]*?\$\$/g) || [];

  // Assume an average reading speed (e.g., 200 words per minute)
  const wordsPerMinute = 200;
  const latexReadingTime = latexBlocks.length * 0.5; // Estimate: each LaTeX block takes about 30 seconds to read

  const readingTime = words.length / wordsPerMinute + latexReadingTime;

  return Math.ceil(readingTime);
}

export { formatDate, capitalize, buildToc, customReadingTime };

// *****************************************
export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

// *****************************************
