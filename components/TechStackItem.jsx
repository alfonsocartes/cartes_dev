import Image from "next/image";

export const TechStackItem = ({ title, imageUrl, url, children }) => {
  const image = {
    url: imageUrl,
    width: "256",
    height: "256",
    alt: `${title} logo image`,
  };

  return (
    <article className="my-4 border-gray-200 p-4 rounded-lg border dark:bg-slate-900">
      <div className="flex sm:flex-row flex-col gap-4 items-center ">
        <div className="sm:w-1/3 dark:bg-slate-600 rounded">
          <Image
            priority={false}
            loading="lazy"
            src={imageUrl}
            alt={`${title} logo image`}
            width={256}
            height={256}
            className="aspect-[3/2] w-full rounded-2xl object-center p-8"
          />
        </div>
        <div className="sm:w-2/3">
          <h2 className="title-font mb-2 text-center text-lg font-medium text-indigo-600  hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600 md:text-left">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          <div className="text-center sm:text-left">{children}</div>
        </div>
      </div>
    </article>
  );
};
