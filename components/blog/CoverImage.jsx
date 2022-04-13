import Link from "next/link";
import Image from "next/image";

export const CoverImage = ({ title, coverImage, slug }) => {
  if (!coverImage) return null;
  const image = (
    <Image
      src={coverImage.url}
      width={coverImage.width}
      height={coverImage.height}
      alt={`Cover Image for ${title}`}
      layout="responsive"
    />
  );
  return (
    <div
      className="mx-auto rounded-xl visible object-cover object-center overflow-hidden"
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
