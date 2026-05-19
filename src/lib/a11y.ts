/** Accessible name suffix for links that open in a new tab. */
export const NEW_TAB_SUFFIX = " (opens in new tab)";

export function externalLinkLabel(label: string): string {
  return `${label}${NEW_TAB_SUFFIX}`;
}
