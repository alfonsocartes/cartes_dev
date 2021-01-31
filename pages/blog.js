import React from "react";
import Layout from "../components/Layout";
import { getAllPosts } from "../lib/api";

const Blog = ({ allPosts }) => {
  return (
    <Layout title="Contact | Cartes Development | Full-Stack Web Development / Mobile Development">
      {allPosts.map((post) => {
        return (
          <section key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.date}</p>
            <p>{post.slug}</p>
            <p>{post.author.name}</p>
            <p>{post.author.picture}</p>
            <p>{post.coverImage}</p>
            <p>{post.excerpt}</p>
          </section>
        );
      })}
    </Layout>
  );
};

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
