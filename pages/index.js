import Head from "next/head";
import Container from "../components/container";
import Header from "../components/header";
import Layout from "../components/layout";

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>cartes.dev | Web Development | Mobile Development</title>
        </Head>
        <Container>
          <Header title="</> cartes.dev" href="/" />
          <h1>FULL-STACK WEB DEVELOPMENT / MOBILE DEVELOPMENT</h1>
        </Container>
      </Layout>
    </>
  );
}
