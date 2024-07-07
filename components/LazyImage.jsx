import Image from "next/image";
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
  };

  return (
    <div className={handleLoad()}>
      <Image
        onLoad={() => setLoaded(true)}
        src={image.url}
        width={image.width}
        height={image.height}
        alt={image.alt}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};
