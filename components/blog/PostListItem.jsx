import Link from "next/link";
import { DateFormatter } from "./DateFormatter";

export const PostListItem = ({ post }) => (
  <section>
    <h4 className="title-font mb-2 text-2xl font-medium  text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-200">
      <Link href={`/blog/posts/${post.slug}`}>{post.title}</Link>
    </h4>

    <p className="my-4 text-sm text-gray-500">
      <DateFormatter dateString={post.date} />
    </p>

    <p className="text-lg">{post.excerpt}</p>
  </section>
);
