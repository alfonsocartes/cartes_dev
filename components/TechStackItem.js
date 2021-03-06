import Image from "next/image";

const TechStackItem = ({ title, imageUrl, url, children }) => (
  <article className="p-4">
    <div className="px-6 border border-gray-200 rounded-lg">
      {/* <div className="flex flex-col md:flex-row items-center"> */}
      <div className="grid grid-flow-row md:grid-flow-col items-center">
        <figure className="text-center mr-10 p-4 dark:bg-gray-500 rounded-xl">
          <Image src={imageUrl} width={175} height={175} />
        </figure>
        <div className="">
          <h2 className="text-center md:text-left text-lg font-medium title-font mb-2  text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          <p className=" leading-relaxed text-base">{children}</p>
        </div>
      </div>
    </div>
  </article>
);

export default TechStackItem;
