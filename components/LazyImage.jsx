import Image from "next/image";
import { useState } from "react";

export const LazyImage = ({ image }) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <div
      className={`visible overflow-hidden rounded-lg object-cover object-center shadow-lg ${
        isLoading ? "animate-pulse bg-slate-200" : ""
      }`}
    >
      <Image
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
