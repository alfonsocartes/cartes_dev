import Link from "next/link";
import { LazyImage } from "../LazyImage";

export const CoverImage = ({ title, coverImage, slug }) => {
  if (!coverImage) return null;
  const image = <LazyImage image={coverImage} />;
  return (
    <div
      className="visible mx-auto overflow-hidden rounded-xl object-cover object-center"
      style={{
        width: coverImage.containerWidth,
        height: coverImage.containerHeight,
      }}
    >
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};
