import Image from "next/legacy/image";
import { useState } from "react";

export const LazyImage = ({ image, noStyle }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    if (!loaded && noStyle) {
      return "animate-pulse";
    } else if (!loaded && !noStyle) {
      return "visible overflow-hidden rounded-lg object-cover object-center shadow-lg animate-pulse bg-slate-200";
    } else if (loaded && !noStyle) {
      return "visible overflow-hidden rounded-lg object-cover object-center shadow-lg";
    } else {
      return "";
    }
    return style;
  };

  return (
    <div className={handleLoad()}>
      <Image
        onLoadingComplete={() => setLoaded(true)}
        src={image.url}
        width={image.width}
        height={image.height}
        alt={image.alt}
        layout="responsive"
      />
    </div>
  );
};
