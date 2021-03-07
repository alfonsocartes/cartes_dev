import Avatar from "./Avatar";
import DateFormatter from "./DateFormatter";
import CoverImage from "./CoverImage";
// import PostTitle from "./PostTitle";

const PostHeader = ({ frontMatter }) => {
  const { title, coverImage, date, author, readingTime } = frontMatter;
  // console.log("frontMatter", JSON.stringify(frontMatter, null, 2));

  // const editUrl = (slug) =>
  //   `https://github.com/alfonsocartes/cartes_dev/edit/master/data/posts/${slug}.mdx`;

  // const discussUrl = (slug) =>
  //   `https://mobile.twitter.com/search?q=${encodeURIComponent(
  //     `https://cartes.dev/blog/${slug}`
  //   )}`;

  return (
    <>
      {/* <PostTitle>{title}</PostTitle> */}

      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>

      <div className="max-w-2xl mx-auto mb-16 text-sm text-gray-700 dark:text-gray-300">
        <div className="mb-2">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-2">
          <DateFormatter dateString={date} />
        </div>
        <p className="mb-2 min-w-32">{readingTime.text}</p>
        <div className="">
          {/* <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {"Discuss on Twitter"}
          </a>
          {` • `} */}
          {/* <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Edit on GitHub
          </a> */}
        </div>
      </div>
    </>
  );
};

export default PostHeader;
