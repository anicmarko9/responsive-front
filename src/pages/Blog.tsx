import React from 'react';

import Layout from '@Layout/Layout';
import BlogContainer from '@Components/content/blog/BlogContainer';
import { posts } from '@Mocks/blog-posts';

const Blog = (): JSX.Element => {
  return (
    <Layout>
      <section className="mx-auto mt-3 flex w-screen flex-col flex-wrap gap-5 px-4 py-10 md:px-16 lg:px-32 xl:px-56">
        <BlogContainer posts={posts} />
      </section>
    </Layout>
  );
};

export default Blog;
