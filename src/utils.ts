function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
}

function capitalize(str: string): string {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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

export { formatDate, capitalize, buildToc };
