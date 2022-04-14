import { Avatar } from "./Avatar";
import { DateFormatter } from "./DateFormatter";
import { CoverImage } from "./CoverImage";

export const PostHeader = ({ frontMatter }) => {
  const { title, coverImage, date, author, readingTime, type } = frontMatter;

  const enableInfo = type === "blog-post" || type === "mobile-project";

  const editUrl = (slug) =>
    `https://github.com/alfonsocartes/cartes_dev/edit/master/data/posts/${slug}.mdx`;

  return (
    <>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} coverImage={coverImage} />
      </div>

      {enableInfo && (
        <div className="mx-auto mb-16 max-w-2xl text-sm text-gray-700 dark:text-gray-300">
          <div className="mb-2">
            <Avatar name={author.name} picture={author.picture} />
          </div>
          <div className="mb-2">
            <DateFormatter dateString={date} />
          </div>
          <p className="min-w-32 mb-2">{readingTime.text}</p>
          <div className="">
            <a
              href={editUrl(frontMatter.slug)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Edit on GitHub
            </a>
          </div>
        </div>
      )}
    </>
  );
};
