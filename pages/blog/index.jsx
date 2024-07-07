import React from "react";
import { getAllFilesFrontMatter } from "../../lib/mdx";
import { Layout } from "../../components/Layout";
import { PostListItem } from "../../components/blog/PostListItem";

const Blog = ({ allPosts }) => {
  const sortedPosts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date)),
  );
  return (
    <Layout title="Blog | Cartes Development">
      <div className="mx-auto max-w-2xl">
        <h1 className="title-font mb-16 text-center text-2xl font-bold sm:text-3xl">
          Blog
        </h1>
        {sortedPosts.map((post) => (
          <div className="mb-10" key={post.slug}>
            <PostListItem post={post} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter("posts");

  return { props: { allPosts } };
}

export default Blog;
