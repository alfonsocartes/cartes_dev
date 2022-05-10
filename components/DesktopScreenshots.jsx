import desktopScreenshots from "../data/desktopScreenshots.json";
import { BlurredImage } from "./BlurredImage";

const getImages = (slug) => {
  if (desktopScreenshots) {
    const found = desktopScreenshots.find((image) => image.slug === slug);
    if (found) {
      return found.images;
    }
  }
  return null;
};

export const DesktopScreenshots = ({ post }) => {
  // Get Images for Carousel depending on the post string passed in props. I do it this way because of limitations from next-mdx-remote
  /* 
  type Image = {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  */
  const images = getImages(post);

  if (!images) {
    return null;
  }

  return (
    <div className="my-4 flex flex-col gap-6">
      {images.map((image, index) => (
        <div key={index} className="my-4 marker:text-transparent">
          <div className="mx-auto">
            <BlurredImage image={image} />
          </div>
        </div>
      ))}
    </div>
  );
};
