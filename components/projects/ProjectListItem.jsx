import Link from "next/link";
import { BlurredImage } from "../BlurredImage";
import { Tag } from "../Tag";

export const ProjectListItem = ({ post, path }) => {
  const { title, slug, excerpt, coverImage, tags } = post;
  const image = coverImage
    ? {
        url: coverImage.url,
        width: coverImage.width,
        height: coverImage.height,
        alt: `Cover Image for ${title}`,
      }
    : null;

  return (
    <article className="p-4">
      <div className="rounded-lg border border-gray-200 p-4">
        <div className="grid grid-flow-row items-center md:grid-flow-col">
          {coverImage && (
            <figure className="m-8 h-40 w-40 justify-self-center overflow-hidden rounded-xl dark:bg-gray-500">
              <BlurredImage image={image} />
            </figure>
          )}
          <div className="">
            <h2 className="title-font mb-2 text-center text-2xl font-medium text-indigo-600  hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-600 md:text-left">
              <Link href={`${path}/${slug}`}>{title}</Link>
            </h2>
            <p className="text-base leading-relaxed">{excerpt}</p>
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
