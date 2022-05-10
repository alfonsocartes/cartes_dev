import Image from "next/image";
import { useState } from "react";

export const BlurredImage = ({ image }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div
      className={`rounded-xl ${
        isLoading ? "animate-pulse rounded-xl bg-slate-200" : ""
      }`}
    >
      <Image
        className={`duration-500 ease-in-out ${
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        onLoadingComplete={() => setLoading(false)}
        src={image.url}
        width={image.width}
        height={image.height}
        alt={image.alt}
        layout="responsive"
      />
    </div>
  );
};
