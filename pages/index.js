import Layout from "../components/layout/Layout";
import HeroPersonal from "../components/HeroPersonal";
import EmailNewsletter from "../components/cta/EmailNewsletter";
import TechStack from "../components/TechStack";

export default function Index() {
  return (
    <>
      <Layout title="Cartes Development | Full-Stack Web Development / Mobile Development">
        <HeroPersonal />
        <TechStack />
        <EmailNewsletter />
      </Layout>
    </>
  );
}
