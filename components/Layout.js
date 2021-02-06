import Head from "next/head";
import Footer from "./page-layout/Footer";
import Header from "./page-layout/Header";

export default function Layout({ title, children }) {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-gray-200 flex flex-col min-h-screen ">
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className="container mx-auto px-5 py-10 flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
