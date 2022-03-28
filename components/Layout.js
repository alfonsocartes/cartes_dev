import Head from "next/head";
import { useRouter } from "next/router";

import Footer from "./page-layout/Footer";
import Header from "./page-layout/Header";

export default function Layout({ children, ...customMeta }) {
  const router = useRouter();
  const meta = {
    title:
      "cartes.dev | Cartes Development | Full-Stack Web Development | Mobile Development",
    description:
      "Cartes Development, Full-Stack Web Development, Mobile DevelopmentFront-end developer, JavaScript, React, and so much more...",
    image: "https://www.cartes.dev/images/logo_cartes_dev.png",
    type: "website",
    ...customMeta,
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-gray-200 flex flex-col min-h-screen ">
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
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cartes_dev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        {/* Removed Google Analytics because I have to add a GDPR notice. Try a server side method */}
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        /> */}
      </Head>
      <Header />
      <main className="container mx-auto px-5 py-10 flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
