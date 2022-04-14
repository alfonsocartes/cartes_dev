import Image from "next/image";

export const TechStackItem = ({ title, imageUrl, url, children }) => (
  <article className="my-4 border-gray-200 p-4 md:rounded-lg md:border">
    <div className="grid grid-flow-row items-center md:grid-flow-col ">
      <figure className="m-4 h-40 w-40 items-center justify-self-center overflow-hidden rounded-xl p-4 text-center dark:bg-gray-500">
        <Image
          src={imageUrl}
          width={256}
          height={256}
          alt={`${title} logo image`}
        />
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
