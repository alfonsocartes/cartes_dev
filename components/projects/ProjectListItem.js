import Image from "next/image";
import Link from "next/link";
import { Tag } from "../Tag";

export const ProjectListItem = ({ post, path }) => {
  const { title, slug, excerpt, coverImage, tags } = post;
  return (
    <article className="p-4">
      <div className="p-4 border border-gray-200 rounded-lg">
        <div className="grid grid-flow-row md:grid-flow-col items-center">
          {coverImage && (
            <figure className="justify-self-center w-40 h-40 dark:bg-gray-500 m-8 rounded-xl overflow-hidden">
              <Image
                src={coverImage.url}
                width={coverImage.width}
                height={coverImage.height}
                alt={`Cover Image for ${title}`}
                layout="responsive"
              />
            </figure>
          )}
          <div className="">
            <h2 className="text-center md:text-left text-2xl font-medium title-font mb-2  text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600">
              <Link href={`${path}/${slug}`}>{title}</Link>
            </h2>
            <p className="leading-relaxed text-base">{excerpt}</p>
            <div className="mt-4 flex flex-wrap">
              {tags?.map((tag, i) => (
                <Tag key={i} tag={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
