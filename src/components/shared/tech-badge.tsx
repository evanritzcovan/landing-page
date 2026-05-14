import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const techBadgeVariants = cva(
  "inline-flex shrink-0 items-center rounded-md border font-medium transition-colors",
  {
    variants: {
      variant: {
        outline: "border-border/60 text-muted-foreground bg-transparent",
        soft: "border-transparent bg-muted/50 text-foreground/95",
        solid:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "sm",
    },
  }
);

export type TechBadgeProps = ComponentProps<"span"> &
  VariantProps<typeof techBadgeVariants>;

export function TechBadge({
  className,
  variant,
  size,
  ...props
}: TechBadgeProps) {
  return (
    <span
      className={cn(techBadgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}
