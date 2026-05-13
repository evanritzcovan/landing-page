"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { mainNavItems } from "@/data/navigation";
import { siteConfig } from "@/data/site";
import { opensInNewTab } from "@/lib/href";
import { cn } from "@/lib/utils";

import { Container } from "./container";

function NavLink({
  href,
  children,
  onNavigate,
  className,
}: {
  href: string;
  children: ReactNode;
  onNavigate?: () => void;
  className?: string;
}) {
  const linkClass = cn(
    "text-muted-foreground hover:text-foreground focus-visible:ring-ring rounded-md text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
    className
  );

  if (opensInNewTab(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={linkClass}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={linkClass}
      prefetch={false}
    >
      {children}
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="border-border/60 bg-background/75 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between gap-4 md:h-16">
        <Link
          href="/#hero"
          className="text-foreground focus-visible:ring-ring shrink-0 rounded-md text-sm font-semibold tracking-tight focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {mainNavItems.map((item) => (
            <NavLink key={item.label} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="text-muted-foreground hover:text-foreground focus-visible:ring-ring inline-flex size-9 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open ? (
        <>
          <button
            type="button"
            className="bg-background/80 fixed inset-0 z-40 md:hidden"
            aria-hidden
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav"
            className="border-border/60 bg-background/95 fixed inset-x-0 top-14 z-50 border-b shadow-lg md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <nav aria-label="Primary mobile" className="px-4 py-4">
              <ul className="flex flex-col gap-1">
                {mainNavItems.map((item) => (
                  <li key={item.label}>
                    <NavLink
                      href={item.href}
                      className="block py-2.5 text-base"
                      onNavigate={() => setOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      ) : null}
    </header>
  );
}
