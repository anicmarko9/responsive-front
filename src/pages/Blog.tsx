import React from 'react';

import Layout from '@Layout/Layout';
import BlogContainer from '@Components/content/blog/BlogContainer';
import { posts } from '@Mocks/blog-posts';

const Blog = (): JSX.Element => {
  return (
    <Layout>
      <section className="w-screen mx-auto px-4 md:px-16 lg:px-32 xl:px-56 flex flex-col gap-5 mt-3 py-10 flex-wrap">
        <BlogContainer posts={posts} />
      </section>
    </Layout>
  );
};

export default Blog;
