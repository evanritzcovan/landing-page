import type { LucideIcon } from "lucide-react";
import { ExternalLink } from "lucide-react";

import { opensInNewTab } from "@/lib/href";
import { cn } from "@/lib/utils";

export type ContactChannelCardProps = {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

const cardClass = cn(
  "border-border/60 bg-card/15 hover:border-border hover:bg-card/25 group flex h-full flex-col rounded-xl border p-5 transition-colors",
  "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
);

export function ContactChannelCard({
  href,
  label,
  description,
  icon: Icon,
}: ContactChannelCardProps) {
  const external = opensInNewTab(href);

  const body = (
    <>
      <span className="flex items-start justify-between gap-3">
        <span className="flex items-center gap-2.5">
          <Icon
            className="text-foreground size-5 shrink-0 opacity-90"
            aria-hidden
          />
          <span className="text-foreground font-semibold tracking-tight">
            {label}
          </span>
        </span>
        {external ? (
          <ExternalLink
            className="text-muted-foreground size-4 shrink-0 opacity-60 transition-opacity group-hover:opacity-100"
            aria-hidden
          />
        ) : null}
      </span>
      <span className="text-muted-foreground mt-3 block text-sm leading-relaxed">
        {description}
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
      >
        {body}
      </a>
    );
  }

  return (
    <a href={href} className={cardClass}>
      {body}
    </a>
  );
}
