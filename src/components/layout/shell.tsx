import type { ReactNode } from "react";

import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="bg-primary text-primary-foreground focus-visible:ring-ring sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-background"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex flex-1 flex-col" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
