import { getAllFilesFrontMatter } from "../../../lib/mdx";

import { Layout } from "../../../components/Layout";
import { ProjectList } from "../../../components/projects/ProjectList";

const WebPortfolio = ({ allPosts }) => {
  const sortedPosts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return (
    <Layout title="Web Portfolio | Cartes Development">
      <ProjectList
        title="Web Development Portfolio"
        path="/portfolio/web-development/web-projects"
        allPosts={sortedPosts}
      />
    </Layout>
  );
};

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("web-projects");

  return { props: { allPosts } };
}

export default WebPortfolio;
