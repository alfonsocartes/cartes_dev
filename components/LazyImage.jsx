import Image from "next/image";
import { useState } from "react";

export const LazyImage = ({ image, noStyle }) => {
  const [isLoading, setLoading] = useState(false);

  const handleLoad = () => {
    if (!isLoading && noStyle) {
      return "animate-pulse";
    } else if (!isLoading && !noStyle) {
      return "visible overflow-hidden rounded-lg object-cover object-center shadow-lg animate-pulse bg-slate-200";
    } else if (isLoading && !noStyle) {
      return "visible overflow-hidden rounded-lg object-cover object-center shadow-lg";
    } else {
      return "";
    }
    return style;
  };

  return (
    <div className={handleLoad()}>
      <Image
        onLoadingComplete={() => setLoading(true)}
        src={image.url}
        width={image.width}
        height={image.height}
        alt={image.alt}
        layout="responsive"
      />
    </div>
  );
};
