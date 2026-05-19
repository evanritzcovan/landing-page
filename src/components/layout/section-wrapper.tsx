import type { ComponentProps } from "react";

import { sectionScrollMargin } from "@/lib/section-layout";
import { cn } from "@/lib/utils";

import { Container } from "./container";

export type SectionWrapperProps = ComponentProps<"section"> & {
  /** When true, wraps children in Container with default horizontal padding */
  contained?: boolean;
  containerSize?: ComponentProps<typeof Container>["size"];
};

export function SectionWrapper({
  className,
  contained = true,
  containerSize = "wide",
  children,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        sectionScrollMargin,
        "py-[var(--section-y)] md:py-[var(--section-y-md)]",
        className
      )}
      {...props}
    >
      {contained ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </section>
  );
}
