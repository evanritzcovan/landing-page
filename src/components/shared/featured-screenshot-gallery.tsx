"use client";

import Image from "next/image";

import {
  ExpandableImageTrigger,
  useImageLightbox,
  type LightboxImage,
} from "@/components/shared/image-lightbox";
import { cn } from "@/lib/utils";

import type { FeaturedScreenshot } from "@/types/project";

type FeaturedScreenshotGalleryProps = {
  screenshots: FeaturedScreenshot[];
  projectTitle: string;
  className?: string;
};

export function FeaturedScreenshotGallery({
  screenshots,
  projectTitle,
  className,
}: FeaturedScreenshotGalleryProps) {
  const images: LightboxImage[] = screenshots.map((shot, i) => ({
    src: shot.src,
    alt: shot.alt || `${projectTitle} screenshot ${i + 1}`,
  }));

  const { openAt, lightbox } = useImageLightbox(images);

  if (screenshots.length === 0) return null;

  return (
    <>
      {lightbox}
      <div
        className={cn(
          "grid h-full w-full min-w-0 grid-cols-3 items-end gap-2 px-2 pt-2 pb-6",
          "sm:gap-3 sm:px-3 sm:pb-10",
          "lg:items-center lg:content-center lg:gap-3 lg:px-6 lg:py-8",
          className
        )}
        aria-label={`${projectTitle} app screenshots`}
      >
        {screenshots.map((shot, i) => (
          <figure
            key={shot.src}
            className={cn(
              "min-w-0 w-full",
              i === 1 &&
                "-translate-y-1.5 lg:-translate-y-2 motion-reduce:translate-y-0"
            )}
          >
            <ExpandableImageTrigger
              images={images}
              imageIndex={i}
              onOpen={openAt}
              className="w-full rounded-[1.35rem]"
            >
              <div className="border-border/60 bg-card/40 w-full rounded-[1.35rem] border p-1 shadow-sm ring-1 ring-white/5">
                <div className="bg-background relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.05rem]">
                  <Image
                    src={shot.src}
                    alt=""
                    aria-hidden
                    fill
                    priority={i === 0}
                    loading={i === 0 ? undefined : "lazy"}
                    sizes="(max-width: 1023px) 31vw, (max-width: 1439px) 14vw, 210px"
                    className="object-contain object-center"
                  />
                </div>
              </div>
            </ExpandableImageTrigger>
            <figcaption className="sr-only">{images[i].alt}</figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
