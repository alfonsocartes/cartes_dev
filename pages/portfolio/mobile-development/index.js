import Layout from "../../../components/Layout";
import ProjectList from "../../../components/projects/ProjectList";
import { getAllFilesFrontMatter } from "../../../lib/mdx";

const MobilePortfolio = ({ allPosts }) => {
  const sortedPosts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return (
    <Layout title="Mobile Portfolio | Cartes Development">
      <ProjectList
        title="Mobile Development Portfolio"
        path="/portfolio/mobile-development/mobile-projects"
        allPosts={sortedPosts}
      />
    </Layout>
  );
};

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("mobile-projects");

  return { props: { allPosts } };
}

export default MobilePortfolio;
