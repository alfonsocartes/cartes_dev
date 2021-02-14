import React from "react";

import { getAllFilesFrontMatter } from "../lib/mdx";

import Layout from "../components/Layout";
import PostListItem from "../components/blog/PostListItem";

const Blog = ({ allPosts }) => (
  <Layout title="Blog | Cartes Development">
    <div className="max-w-2xl mx-auto">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-16 text-center">
        Blog
      </h1>
      {allPosts.map((post) => (
        <div className="mb-10" key={post.slug}>
          <PostListItem post={post} />
        </div>
      ))}
    </div>
  </Layout>
);

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("posts");

  return { props: { allPosts } };
}

export default Blog;
