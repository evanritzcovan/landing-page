import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const maxWidth = {
  narrow: "max-w-3xl",
  wide: "max-w-6xl",
} as const;

type ContainerProps = ComponentProps<"div"> & {
  size?: keyof typeof maxWidth;
};

export function Container({
  className,
  size = "wide",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        maxWidth[size],
        className
      )}
      {...props}
    />
  );
}
