import React from "react";
import Layout from "../components/Layout";
import PostListItem from "../components/blog/PostListItem";
// import { getAllPosts } from "../lib/api";
import { getAllFilesFrontMatter } from "../lib/mdx";

const Blog = ({ allPosts }) => {
  // console.log("allPosts", JSON.stringify(allPosts, null, 2));
  return (
    <Layout title="Blog | Cartes Development">
      <div className="md:mx-20">
        {allPosts.map((post) => (
          <div className="mb-10" key={post.slug}>
            <PostListItem post={post} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

// export async function getStaticProps() {
//   const allPosts = getAllPosts([
//     "title",
//     "date",
//     "slug",
//     "author",
//     "coverImage",
//     "excerpt",
//   ]);

//   return {
//     props: { allPosts },
//   };
// }

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("posts");

  return { props: { allPosts } };
}

export default Blog;
