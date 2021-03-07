import Layout from "../../../components/Layout";
import ProjectList from "../../../components/projects/ProjectList";
import { getAllFilesFrontMatter } from "../../../lib/mdx";

const MobilePortfolio = ({ allPosts }) => (
  <Layout title="Mobile Portfolio | Cartes Development">
    <ProjectList
      title="Mobile Development Portfolio"
      path="/portfolio/mobile-development/mobile-projects"
      allPosts={allPosts}
    />
  </Layout>
);

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("mobile-projects");

  return { props: { allPosts } };
}

export default MobilePortfolio;
