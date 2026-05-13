/** Same behavior as hero CTAs: external URLs and PDFs open in a new tab. */
export function opensInNewTab(href: string): boolean {
  if (href.startsWith("http://") || href.startsWith("https://")) {
    return true;
  }
  const path = href.split("?")[0]?.toLowerCase() ?? "";
  return path.endsWith(".pdf");
}
