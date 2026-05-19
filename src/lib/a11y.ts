const newTabSuffix = " (opens in new tab)";

/** Accessible name for links that open in a new tab. */
export function externalLinkLabel(label: string): string {
  return `${label}${newTabSuffix}`;
}
