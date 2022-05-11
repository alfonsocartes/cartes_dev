import Image from "next/image";
import { useState } from "react";

export const BlurredImage = ({ image }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div
      className={`overflow-clip rounded-xl ${
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
