import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center">
        <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase">
          Portfolio
        </p>
        <h1 className="text-foreground text-3xl font-semibold tracking-tight sm:text-4xl">
          {siteConfig.name}
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed">
          {siteConfig.description}
        </p>
        <a
          href="https://github.com"
          rel="noopener noreferrer"
          target="_blank"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
        >
          Phase 1 scaffold
        </a>
      </div>
    </div>
  );
}
