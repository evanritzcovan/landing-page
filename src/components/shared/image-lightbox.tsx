"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { useFocusTrap } from "@/components/layout/use-focus-trap";
import { cn } from "@/lib/utils";

export type LightboxImage = {
  src: string;
  alt: string;
};

type ImageLightboxProps = {
  images: LightboxImage[];
  index: number;
  open: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  returnFocusRef: RefObject<HTMLElement | null>;
};

export function ImageLightbox({
  images,
  index,
  open,
  onClose,
  onIndexChange,
  returnFocusRef,
}: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const hasMultiple = images.length > 1;
  const current = images[index];

  useFocusTrap(open, dialogRef, returnFocusRef);

  const goPrev = useCallback(() => {
    onIndexChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onIndexChange]);

  const goNext = useCallback(() => {
    onIndexChange((index + 1) % images.length);
  }, [index, images.length, onIndexChange]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (!hasMultiple) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, hasMultiple, goPrev, goNext]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open || !current) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="presentation"
    >
      <button
        type="button"
        className="bg-background/90 absolute inset-0 backdrop-blur-sm"
        aria-label="Close image preview"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={current.alt}
        className="border-border/60 bg-card/95 relative z-10 flex max-h-[min(92vh,900px)] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border shadow-2xl"
      >
        <div className="border-border/60 flex items-center justify-between gap-3 border-b px-4 py-3 sm:px-5">
          <p className="text-foreground min-w-0 truncate text-sm font-medium sm:text-base">
            {current.alt}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground focus-visible:ring-ring inline-flex size-9 shrink-0 items-center justify-center rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
            aria-label="Close"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-black/40 p-4 sm:p-6">
          <div className="relative h-[min(72vh,780px)] w-full">
            <Image
              src={current.src}
              alt={current.alt}
              fill
              className="object-contain object-center"
              sizes="(max-width: 640px) calc(100vw - 4rem), min(64rem, calc(100vw - 6rem))"
              priority
            />
          </div>
          {hasMultiple ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="border-border/60 bg-background/90 text-foreground hover:bg-background focus-visible:ring-ring absolute top-1/2 left-2 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:left-4"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="border-border/60 bg-background/90 text-foreground hover:bg-background focus-visible:ring-ring absolute top-1/2 right-2 z-10 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border shadow-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none sm:right-4"
                aria-label="Next image"
              >
                <ChevronRight className="size-5" aria-hidden />
              </button>
            </>
          ) : null}
        </div>

        {hasMultiple ? (
          <p className="text-muted-foreground border-border/60 border-t px-4 py-2.5 text-center text-xs sm:text-sm">
            {index + 1} of {images.length}
            <span className="sr-only"> — use arrow keys to navigate</span>
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function useImageLightbox(images: LightboxImage[]) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const openAt = useCallback((imageIndex: number, trigger: HTMLElement | null) => {
    returnFocusRef.current = trigger;
    setIndex(imageIndex);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const lightbox = (
    <ImageLightbox
      images={images}
      index={index}
      open={open}
      onClose={close}
      onIndexChange={setIndex}
      returnFocusRef={returnFocusRef}
    />
  );

  return { openAt, close, lightbox };
}

const triggerClass =
  "cursor-zoom-in focus-visible:ring-ring block w-full rounded-[inherit] text-left transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none motion-reduce:transition-none";

export function ExpandableImageTrigger({
  images,
  imageIndex,
  onOpen,
  label,
  className,
  children,
}: {
  images: LightboxImage[];
  imageIndex: number;
  onOpen: (index: number, trigger: HTMLElement | null) => void;
  label?: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const image = images[imageIndex];

  return (
    <button
      ref={ref}
      type="button"
      className={cn(triggerClass, className)}
      aria-label={label ?? `View larger image: ${image?.alt ?? "preview"}`}
      onClick={() => onOpen(imageIndex, ref.current)}
    >
      {children}
    </button>
  );
}
