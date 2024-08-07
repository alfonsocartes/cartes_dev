import carouselImages from "../data/carouselImages.json";
import { LazyImage } from "./LazyImage";

const getImagesForCarousel = (slug) => {
  if (carouselImages) {
    const found = carouselImages.find((image) => image.slug === slug);
    if (found) {
      return found.images;
    }
  }
  return null;
};

export const Carousel = ({ post }) => {
  // Get Images for Carousel depending on the post string passed in props. I do it this way because of limitations from next-mdx-remote
  /* 
  type Image = {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  */
  const images = getImagesForCarousel(post);

  if (!images) {
    return null;
  }

  return (
    <ul className="my-4 flex snap-x snap-mandatory gap-6 overflow-x-auto py-4 before:w-[30vw] before:shrink-0 after:w-[30vw] after:shrink-0">
      {images.map((image, index) => (
        <li
          key={index}
          className="my-4 shrink-0 snap-center marker:text-transparent"
        >
          <div className="w-[25vh]">
            <LazyImage image={image} />
          </div>
        </li>
      ))}
    </ul>
  );
};
