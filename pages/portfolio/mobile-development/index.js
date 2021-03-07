import { getAllFilesFrontMatter } from "../../../lib/mdx";

import Layout from "../../../components/Layout";
import MobileProjectListItem from "../../../components/projects/MobileProjectListItem";

const MobilePortfolio = ({ allPosts }) => (
  <Layout title="Mobile Portfolio | Cartes Development">
    <div className="max-w-4xl mx-auto">
      <h1 className="sm:text-3xl text-2xl font-bold title-font text-center mb-10">
        Mobile Portfolio
      </h1>
      {/* TODO: order by date */}
      {allPosts.map((post) => (
        <div className="mb-10" key={post.slug}>
          <MobileProjectListItem post={post} />
        </div>
      ))}
    </div>
  </Layout>
);

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("mobile-projects");

  return { props: { allPosts } };
}

export default MobilePortfolio;
