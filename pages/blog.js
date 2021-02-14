import React from "react";
import Layout from "../components/Layout";
import PostListItem from "../components/blog/PostListItem";
import { getAllPosts } from "../lib/api";

const Blog = ({ allPosts }) => (
  <Layout title="Blog | Cartes Development">
    {allPosts.map((post) => (
      <div className="mb-8" key={post.slug}>
        <PostListItem post={post} />
      </div>
    ))}
  </Layout>
);

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}

export default Blog;
