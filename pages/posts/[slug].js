import { useRouter } from "next/router";
import ErrorPage from "next/error";
import hydrate from "next-mdx-remote/hydrate";

import { getFiles, getFileBySlug } from "../../lib/mdx";
// import markdownToHtml from "../../lib/markdownToHtml";
import MDXComponents from "../../components/MDXComponents";

import Layout from "../../components/Layout";
import PostHeader from "../../components/blog/PostHeader";
import PostBody from "../../components/blog/PostBody";
import ContactUs from "../../components/cta/ContactUs";

// export default function Post({ post }) {
//   const router = useRouter();
//   if (!router.isFallback && !post?.slug) {
//     return <ErrorPage statusCode={404} />;
//   }
//   return (
//     <Layout title={`${post.title} | Cartes Development`}>
//       <article className="max-w-2xl mx-auto mb-32">
//         {/* <Head>
//           <title>
//             {post.title} | Next.js Blog Example with {CMS_NAME}
//           </title>
//           <meta property="og:image" content={post.ogImage.url} />
//         </Head> */}
//         <PostHeader
//           title={post.title}
//           coverImage={post.coverImage}
//           date={post.date}
//           author={post.author}
//         />
//         <PostBody content={post.content} />
//       </article>
//     </Layout>
//   );
// }

export default function Post({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  // const router = useRouter();
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }

  console.log("frontMatter", JSON.stringify(frontMatter, null, 2));
  return (
    <Layout title={`${frontMatter.title} | Cartes Development`}>
      <article className="max-w-2xl mx-auto mb-32">
        {/* <Head>
        <title>
          {post.title} | Next.js Blog Example with {CMS_NAME}
        </title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head> */}
        <PostHeader
          title={frontMatter.title}
          coverImage={frontMatter.coverImage}
          date={frontMatter.date}
          author={frontMatter.author}
        />
        <PostBody content={content} />
      </article>
      <ContactUs />
    </Layout>
  );
}

// export default function Blog({ mdxSource, frontMatter }) {
//   const content = hydrate(mdxSource, {
//     components: MDXComponents,
//   });

//   return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
// }

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

// export async function getStaticProps({ params }) {
//   const post = getPostBySlug(params.slug, [
//     "title",
//     "date",
//     "slug",
//     "author",
//     "content",
//     "ogImage",
//     "coverImage",
//   ]);

//   const content = await markdownToHtml(post.content || "");

//   return {
//     props: {
//       post: {
//         ...post,
//         content,
//       },
//     },
//   };
// }

// export async function getStaticPaths() {
//   const posts = getAllPosts(["slug"]);

//   return {
//     paths: posts.map((post) => ({
//       params: {
//         slug: post.slug,
//       },
//     })),
//     fallback: false,
//   };
// }
