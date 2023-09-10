import React from 'react';
import Layout from '@Layout/Layout';
import Subscriptions from '@/components/content/subscription/Subscriptions';

const Subscription = (): JSX.Element => {
  return (
    <Layout>
      <section className="mx-auto mt-5 flex w-screen flex-row flex-wrap justify-center gap-5 bg-primary py-10">
        <Subscriptions plan={'Basic'} price={'$129.99'} />
        <Subscriptions plan={'Advanced'} price={'$329.99'} />
        <Subscriptions plan={'Teams'} price={'$1299.99'} />
      </section>
    </Layout>
  );
};

export default Subscription;
