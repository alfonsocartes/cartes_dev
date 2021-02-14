import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { getPostBySlug, getAllPosts } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

import Layout from "../../components/Layout";
import PostHeader from "../../components/blog/PostHeader";
import PostBody from "../../components/blog/PostBody";

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout title={`${post.title} | Cartes Development`}>
      <article className="max-w-2xl mx-auto mb-32">
        {/* <Head>
          <title>
            {post.title} | Next.js Blog Example with {CMS_NAME}
          </title>
          <meta property="og:image" content={post.ogImage.url} />
        </Head> */}
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={post.content} />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}
