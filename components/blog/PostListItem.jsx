import Link from "next/link";
import { DateFormatter } from "./DateFormatter";

export const PostListItem = ({ post }) => (
  <section>
    <h4 className="text-2xl font-medium title-font mb-2  text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-200">
      <Link href={`/blog/posts/${post.slug}`}>
        <a>{post.title}</a>
      </Link>
    </h4>

    <p className="text-sm text-gray-500 my-4">
      <DateFormatter dateString={post.date} />
    </p>

    <p className="text-lg">{post.excerpt}</p>
  </section>
);
