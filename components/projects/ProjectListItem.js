import Link from "next/link";

const ProjectListItem = ({ post }) => (
  <section>
    <h4 className="text-2xl font-medium title-font mb-2  text-indigo-600 hover:text-indigo-400 dark:text-indigo-400 dark:hover:text-indigo-200">
      <Link href={`/portfolio/projects/${post.slug}`}>
        <a>{post.title}</a>
      </Link>
    </h4>

    <p className="text-lg">{post.excerpt}</p>
  </section>
);

export default ProjectListItem;
