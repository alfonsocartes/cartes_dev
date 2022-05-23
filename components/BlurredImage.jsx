import Image from "next/image";
import { useState } from "react";

export const BlurredImage = ({ image }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div
      className={`visible overflow-hidden rounded-xl object-cover object-center shadow-lg ${
        isLoading ? "animate-pulse bg-slate-200" : ""
      }`}
    >
      <Image
        className={`rounded-xl duration-300 ease-in-out ${
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
