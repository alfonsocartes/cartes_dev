import { getAllFilesFrontMatter } from "../../lib/mdx";

import Layout from "../../components/Layout";
import ProjectListItem from "../../components/projects/ProjectListItem";

const Mobile = ({ allPosts }) => (
  <Layout title="Mobile Portfolio | Cartes Development">
    <div className="max-w-4xl mx-auto">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-center mb-10">
        Mobile Portfolio
      </h1>
      {allPosts.map((post) => (
        <div className="mb-10" key={post.slug}>
          <ProjectListItem post={post} />
        </div>
      ))}
    </div>
  </Layout>
);

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("projects");

  return { props: { allPosts } };
}

export default Mobile;
