import { useRouter } from "next/router";
import ErrorPage from "next/error";
import hydrate from "next-mdx-remote/hydrate";

import { getFiles, getFileBySlug } from "../../../lib/mdx";

import MDXComponents from "../../../components/MDXComponents";

import Layout from "../../../components/Layout";
import PostHeader from "../../../components/blog/PostHeader";
import PostBody from "../../../components/blog/PostBody";
import ContactUs from "../../../components/cta/ContactUs";

export default function Post({ mdxSource, frontMatter }) {
  // To add JSX components to the MDX post, we had to add them to the MDXComponents file
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  const router = useRouter();
  if (!router.isFallback && !frontMatter?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout
      title={`${frontMatter.title} | Blog | Cartes Development`}
      description={frontMatter.excerpt}
      image={`https://www.cartes.dev${frontMatter.image}`}
      date={new Date(frontMatter.date).toISOString()}
      type="article"
    >
      <article className="max-w-2xl mx-auto">
        <PostHeader frontMatter={frontMatter} />
        <PostBody content={content} />
      </article>
      <ContactUs />
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("posts");

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
  const post = await getFileBySlug("posts", params.slug);

  return { props: post };
}
