import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Container from "./Container";

export default function Layout({ title, children }) {
  return (
    <div className="bg-blue-900 dark:bg-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
