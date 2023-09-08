import React from 'react';
import Layout from '@Layout/Layout';
import Story from '@/components/content/stories/Story';

const Stories = () => {
  return (
    <Layout>
      <section className="mx-auto mt-3 flex w-screen flex-row flex-wrap justify-center gap-5 bg-primary py-10 xl:h-[90vh]">
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
