import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getFiles, getFileBySlug } from "../../../lib/mdx";
import { MDXComponents } from "../../../components/MDXComponents";
import { Layout } from "../../../components/Layout";
import { PostHeader } from "../../../components/blog/PostHeader";
import { ContactUs } from "../../../components/cta/ContactUs";
import { MDXRemote } from "next-mdx-remote";

export default function Post({ mdxSource, frontMatter }) {
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
      <article className="mx-auto max-w-2xl">
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
