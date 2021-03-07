import { getAllFilesFrontMatter } from "../../../lib/mdx";

import Layout from "../../../components/Layout";
import ProjectListItem from "../../../components/projects/ProjectListItem";

const WebPortfolio = ({ allPosts }) => (
  <Layout title="Web Portfolio | Cartes Development">
    <div className="max-w-4xl mx-auto">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-center mb-10">
        Web Development Portfolio
      </h1>
      {/* TODO: order by date */}
      {allPosts.map((post) => (
        <div className="mb-4" key={post.slug}>
          <ProjectListItem
            post={post}
            path="/portfolio/web-development/web-projects"
          />
        </div>
      ))}
    </div>
  </Layout>
);

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("web-projects");

  return { props: { allPosts } };
}

export default WebPortfolio;
