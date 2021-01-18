import Layout from "../components/layout/Layout";
import HeroPersonal from "../components/HeroPersonal";
import EmailNewsletter from "../components/cta/EmailNewsletter";

export default function Index() {
  return (
    <>
      <Layout title="Cartes Development | Full-Stack Web Development / Mobile Development">
        <HeroPersonal />
        <EmailNewsletter />
      </Layout>
    </>
  );
}
