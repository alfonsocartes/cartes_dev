import Layout from "../../../components/Layout";
import ProjectList from "../../../components/projects/ProjectList";
import { getAllFilesFrontMatter } from "../../../lib/mdx";

const WebPortfolio = ({ allPosts }) => (
  <Layout title="Web Portfolio | Cartes Development">
    <ProjectList
      title="Web Development Portfolio"
      path="/portfolio/web-development/web-projects"
      allPosts={allPosts}
    />
  </Layout>
);

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("web-projects");

  return { props: { allPosts } };
}

export default WebPortfolio;
