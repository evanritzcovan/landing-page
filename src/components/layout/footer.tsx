import Link from "next/link";

import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 mt-auto border-t">
      <Container className="text-muted-foreground flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">
          © {year} {siteConfig.name}
        </p>
        <Link
          href="/#hero"
          className={cn(
            "text-sm font-medium transition-colors",
            "text-muted-foreground hover:text-foreground",
            "focus-visible:ring-ring rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          )}
        >
          Back to top
        </Link>
      </Container>
    </footer>
  );
}
