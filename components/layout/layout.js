//  Created by Alfonso Cartes.
//  Copyright © Alfonso Cartes. All rights reserved.

import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Container from "./Container";

export default function Layout({ title, children }) {
  return (
    <div className="bg-gradient-to-r from-teal-300 to-blue-200">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
}
