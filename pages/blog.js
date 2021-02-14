import React from "react";

import { getAllFilesFrontMatter } from "../lib/mdx";

import Layout from "../components/Layout";
import PostListItem from "../components/blog/PostListItem";

const Blog = ({ allPosts }) => (
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

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("posts");

  return { props: { allPosts } };
}

export default Blog;
