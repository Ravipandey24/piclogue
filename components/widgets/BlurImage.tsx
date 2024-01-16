"use client";

import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

function BlurImage({ className, ...props }: ImageProps) {
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <Image
      layout="fill"
      className={cn(
        className,
        "duration-700 ease-in-out",
        isLoading
          ? "sm:scale-130 scale-150 blur-2xl grayscale"
          : "sm:scale-110 scale-125 blur-sm"
      )}
      loading="lazy"
      onLoad={() => setLoading(false)}
      {...props}
    />
  );
}

export default BlurImage;
