import React from "react";
import Head from "next/head";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Container from "./layout/Container";

export default function Layout({ title, children }) {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-gray-200 flex flex-col min-h-screen ">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Container>
        <div className="px-5 py-10">{children}</div>
      </Container>
      <Footer />
    </div>
  );
}
