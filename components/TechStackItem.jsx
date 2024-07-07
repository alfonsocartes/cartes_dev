import { LazyImage } from "./LazyImage";

export const TechStackItem = ({ title, imageUrl, url, children }) => {
  const image = {
    url: imageUrl,
    width: "256",
    height: "256",
    alt: `${title} logo image`,
  };

  return (
    <article className="my-4 border-gray-200 p-4 md:rounded-lg md:border">
      <div className="grid grid-flow-row items-center md:grid-flow-col ">
        <figure className="m-4 h-40 w-40 items-center justify-self-center overflow-hidden rounded-xl bg-slate-100 p-4 text-center shadow-sm dark:bg-slate-600">
          <LazyImage image={image} noStyle />
        </figure>
        <div>
          <h2 className="title-font mb-2 text-center text-lg font-medium text-indigo-600  hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600 md:text-left">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          <div className="text-base leading-relaxed">{children}</div>
        </div>
      </div>
    </article>
  );
};
