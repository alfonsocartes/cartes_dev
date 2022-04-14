import Image from "next/image";

import carouselImages from "../data/carouselImages.json";

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
  console.log("images: ", images);

  if (!images) {
    return null;
  }

  return (
    <ul className="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw] my-4">
      {images.map((image, index) => (
        <li
          key={index}
          className="shrink-0 snap-center w-5/6 marker:text-transparent my-4"
        >
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.alt}
            layout="responsive"
          />
        </li>
      ))}
    </ul>
  );
};
