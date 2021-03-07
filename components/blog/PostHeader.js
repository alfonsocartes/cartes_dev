import Avatar from "./Avatar";
import DateFormatter from "./DateFormatter";
import CoverImage from "./CoverImage";
import PostTitle from "./PostTitle";
import AppStoreButton from "../cta/AppStoreButton";
import PlayStoreButton from "../cta/PlayStoreButton";

const PostHeader = ({ frontMatter }) => {
  const { title, coverImage, date, author, readingTime } = frontMatter;
  // console.log("frontMatter", JSON.stringify(frontMatter, null, 2));

  const editUrl = (slug) =>
    `https://github.com/alfonsocartes/cartes_dev/edit/master/data/posts/${slug}.mdx`;

  // const discussUrl = (slug) =>
  //   `https://mobile.twitter.com/search?q=${encodeURIComponent(
  //     `https://cartes.dev/blog/${slug}`
  //   )}`;

  return (
    <>
      <PostTitle>{title}</PostTitle>

      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
    </>
  );
};

export default PostHeader;
