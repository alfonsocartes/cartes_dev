import Link from "next/link";
import { ProjectListItem } from "./ProjectListItem";

export const ProjectList = ({ title, path, allPosts }) => (
  <>
    <div className="max-w-4xl mx-auto">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-center mb-10">
        {title}
      </h1>
      {/* TODO: order by date */}
      {allPosts.map((post) => (
        <div className="mb-4" key={post.slug}>
          <ProjectListItem post={post} path={path} />
        </div>
      ))}
    </div>
    <Link href="/portfolio" passHref>
      <button
        type="button"
        className="flex mx-auto text-white py-2 px-8 focus:outline-none text-lg bg-transparent rounded-lg shadow-lg bg-indigo-600 hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-900"
      >
        Portfolio
      </button>
    </Link>
  </>
);
