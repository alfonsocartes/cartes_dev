import { Layout } from "../components/Layout";
import { HeroPersonal } from "../components/HeroPersonal";
import { TechStack } from "../components/TechStack";
// import {EmailNewsletter} from "../components/cta/EmailNewsletter";

const Index = () => (
  <>
    <Layout title="Cartes Development | Full-Stack Web Development | Mobile Development">
      <HeroPersonal />
      <TechStack />
      {/* <EmailNewsletter /> */}
    </Layout>
  </>
);

export default Index;
