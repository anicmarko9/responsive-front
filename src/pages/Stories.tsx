import React from 'react';
import Layout from '@Layout/Layout';
import Story from '@/components/content/stories/Story';

const Stories = () => {
  return (
    <Layout>
      <section className="w-screen xl:h-[90vh] mx-auto flex flex-row gap-5 mt-3 py-10 flex-wrap bg-primary justify-center">
        <Story
          imgSrc={'/images/stories/story1.jpg'}
          name={'Linda'}
          text={'my success story'}
        ></Story>
        <Story
          imgSrc={'/images/stories/story2.jpg'}
          name={'Jenny'}
          text={'my success story'}
        ></Story>
        <Story
          imgSrc={'/images/stories/story3.jpg'}
          name={'Morgan'}
          text={'my success story'}
        ></Story>
      </section>
    </Layout>
  );
};

export default Stories;
