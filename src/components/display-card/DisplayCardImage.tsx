"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { LoadingSkeleton } from "./LoadingSkeleton";

export interface DisplayCardImageProps {
  src: string;
  alt: string;
  featured?: boolean;
  className?: string;
}

export function DisplayCardImage({
  src,
  alt,
  featured,
  className,
}: DisplayCardImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={cn(
        featured ? "h-56 md:h-full" : "h-48 md:h-full",
        "relative w-full overflow-hidden bg-slate-100",
        className
      )}
    >
      {!loaded && <LoadingSkeleton />}

      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 100vw, 50vw"
        className={cn(
          "transition-transform duration-300",
          "object-contain md:object-cover",
          loaded ? "opacity-100 hover:scale-[1.03]" : "opacity-0"
        )}
        onLoad={() => setLoaded(true)}
      />

      {featured && (
        <span
          className="absolute left-3 top-3 
                     rounded-full bg-black/80 px-2.5 py-1 
                     text-xs font-mono font-medium text-white"
        >
          Featured
        </span>
      )}
    </div>
  );
}
