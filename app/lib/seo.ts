export function getSeoDescription(rawMarkdown: string, fallback: string): string {
  // Strip code blocks
  let text = rawMarkdown.replace(/```[\s\S]*?```/g, "");
  // Strip inline code
  text = text.replace(/`([^`]+)`/g, "$1");
  // Strip headings
  text = text.replace(/#+\s+.+/g, "");
  // Strip links [text](url) -> text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
  // Strip bold/italics
  text = text.replace(/[*_]{1,3}([^*_]+)[*_]{1,3}/g, "$1");
  // Clean up whitespace
  text = text.replace(/\s+/g, " ").trim();

  if (text.length > 150) {
    return text.substring(0, 150) + "...";
  }
  return text || fallback;
}
