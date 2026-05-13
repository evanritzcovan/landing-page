import Link from "next/link";

import { mainNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";

import { Container } from "./container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border/60 mt-auto border-t">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="space-y-1">
          <p className="text-foreground text-sm font-medium">
            {siteConfig.name}
          </p>
          <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {mainNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="border-border/40 text-muted-foreground border-t py-6 text-xs">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
