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
          "relative flex w-full items-center justify-center",
          className
        )}
        aria-label={`${projectTitle} app screenshots`}
      >
        <div
          className={cn(
            "flex w-full gap-4 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 pb-2 [-webkit-overflow-scrolling:touch]",
            "snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            "md:grid md:max-w-none md:grid-cols-3 md:items-end md:justify-items-center md:gap-3 md:overflow-visible md:snap-none md:px-0 md:pb-0",
            "md:[&>figure:nth-child(2)]:-translate-y-2",
            "lg:gap-4"
          )}
        >
          {screenshots.map((shot, i) => (
            <figure
              key={shot.src}
              className={cn(
                "snap-center shrink-0",
                "w-[min(38vw,11.5rem)] sm:w-[min(32vw,12.5rem)]",
                "md:w-full md:max-w-[11rem] md:shrink md:justify-self-center",
                "lg:max-w-[10.5rem] xl:max-w-[11.5rem]"
              )}
            >
              <ExpandableImageTrigger
                images={images}
                imageIndex={i}
                onOpen={openAt}
                className="rounded-[1.35rem]"
              >
                <div className="border-border/60 bg-card/40 rounded-[1.35rem] border p-1 shadow-sm ring-1 ring-white/5">
                  <div className="bg-background relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.05rem]">
                    <Image
                      src={shot.src}
                      alt=""
                      aria-hidden
                      fill
                      priority={i === 0}
                      loading={i === 0 ? undefined : "lazy"}
                      sizes="(max-width: 768px) 40vw, (max-width: 1024px) 30vw, 180px"
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </ExpandableImageTrigger>
              <figcaption className="sr-only">{images[i].alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
