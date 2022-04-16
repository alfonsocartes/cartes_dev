import Head from "next/head";
import { useRouter } from "next/router";
import { Footer } from "./page-layout/Footer";
import { Header } from "./page-layout/Header";

export const Layout = ({ children, ...customMeta }) => {
  const router = useRouter();
  const meta = {
    title:
      "cartes.dev | Cartes Development | Full-Stack Web Development | Mobile Development",
    description:
      "Cartes Development, Full-Stack Web Development, Mobile Development, Front-end developer, JavaScript, React, and so much more...",
    image: "https://www.cartes.dev/images/logo_cartes_dev.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-black dark:bg-black dark:text-gray-200 ">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta
          property="og:url"
          content={`https://www.cartes.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://www.cartes.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="cartes.dev" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        {meta.image ?? <meta property="og:image" content={meta.image} />}
        <meta
          property="og:url"
          content={`https://www.cartes.dev${router.asPath}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cartes_dev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {meta.image ?? <meta property="twitter:image" content={meta.image} />}
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "44b0bd6055724843912a6c4e23689ddf"}'
        />
      </Head>
      <Header />
      <main className="container mx-auto flex-grow px-5 py-10">{children}</main>
      <Footer />
    </div>
  );
};
