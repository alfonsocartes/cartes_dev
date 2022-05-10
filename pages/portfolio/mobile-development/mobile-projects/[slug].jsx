import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { MDXRemote } from "next-mdx-remote";

import { getFiles, getFileBySlug } from "../../../../lib/mdx";

import { MDXComponents } from "../../../../components/MDXComponents";
import { Layout } from "../../../../components/Layout";
import { PostHeader } from "../../../../components/blog/PostHeader";
import { ContactUs } from "../../../../components/cta/ContactUs";

export default function Project({ mdxSource, frontMatter }) {
  const router = useRouter();
  if (!router.isFallback && !frontMatter?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      title={`${frontMatter.title} | Mobile Portfolio | Cartes Development`}
      description={frontMatter.excerpt}
      image={
        frontMatter.ogImage?.url &&
        `https://www.cartes.dev${frontMatter.ogImage.url}`
      }
      date={new Date(frontMatter.date).toISOString()}
      type="article"
    >
      <article className="mx-auto max-w-3xl">
        <PostHeader frontMatter={frontMatter} />
        <div className="prose dark:prose-invert">
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </div>
      </article>
      <ContactUs />
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("mobile-projects");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("mobile-projects", params.slug);

  return { props: post };
}
