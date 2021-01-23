import Layout from "../components/Layout";
import HeroPersonal from "../components/HeroPersonal";
// import EmailNewsletter from "../components/cta/EmailNewsletter";
import TechStack from "../components/TechStack";

const Index = () => (
  <>
    <Layout title="Cartes Development | Full-Stack Web Development / Mobile Development">
      <HeroPersonal />
      <TechStack />
      {/* <EmailNewsletter /> */}
    </Layout>
  </>
);

export default Index;
