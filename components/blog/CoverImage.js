import Link from "next/link";
import Image from "next/image";

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <Image
      src={coverImage.url}
      layout="responsive"
      width={coverImage.width}
      height={coverImage.height}
      alt={`Cover Image for ${title}`}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
