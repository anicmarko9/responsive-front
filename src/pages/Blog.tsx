import React from 'react';

import Layout from '@Layout/Layout';
import BlogContainer from '@Components/content/blog/BlogContainer';
import { posts } from '@Mocks/blog-posts';

const Blog = (): JSX.Element => {
  return (
    <Layout>
      <section className="baseContainerX baseContainerY">
        <BlogContainer posts={posts} />
      </section>
    </Layout>
  );
};

export default Blog;
