// WIP: THIS IS A WORK IN PROGRESS

export const Carousel = ({ images }) => (
  <ul className="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw]">
    {images.map((image, index) => (
      <li key={index} className="shrink-0 snap-center">
        <img src={image.src} alt={image.alt} />
      </li>
    ))}
  </ul>
);
