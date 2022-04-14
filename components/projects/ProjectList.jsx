import Link from "next/link";
import { ProjectListItem } from "./ProjectListItem";

export const ProjectList = ({ title, path, allPosts }) => (
  <>
    <div className="mx-auto max-w-4xl">
      <h1 className="title-font mb-10 text-center text-2xl font-bold sm:text-3xl">
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
        className="mx-auto flex rounded-lg bg-transparent bg-indigo-600 py-2 px-8 text-lg text-white shadow-lg hover:bg-indigo-400 focus:outline-none dark:bg-indigo-600 dark:hover:bg-indigo-900"
      >
        Portfolio
      </button>
    </Link>
  </>
);
