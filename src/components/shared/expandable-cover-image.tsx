"use client";

import Image from "next/image";

import {
  ExpandableImageTrigger,
  useImageLightbox,
} from "@/components/shared/image-lightbox";
import { cn } from "@/lib/utils";

export type ExpandableCoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
};

export function ExpandableCoverImage({
  src,
  alt,
  className,
  imageClassName,
  sizes = "100vw",
  priority,
}: ExpandableCoverImageProps) {
  const images = [{ src, alt }];
  const { openAt, lightbox } = useImageLightbox(images);

  return (
    <>
      {lightbox}
      <ExpandableImageTrigger
        images={images}
        imageIndex={0}
        onOpen={openAt}
        className={cn("relative h-full min-h-[inherit] w-full", className)}
      >
        <Image
          src={src}
          alt=""
          aria-hidden
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-contain object-center", imageClassName)}
        />
      </ExpandableImageTrigger>
    </>
  );
}
