import React from 'react';
import Layout from '@Layout/Layout';
import Subscriptions from '@/components/content/subscription/Subscriptions';

const Subscription = (): JSX.Element => {
  return (
    <Layout>
      <section className="w-screen mx-auto flex flex-row gap-5 mt-5 py-10 flex-wrap bg-primary justify-center">
        <Subscriptions plan={'Basic'} price={'$129.99'} />
        <Subscriptions plan={'Advanced'} price={'$329.99'} />
        <Subscriptions plan={'Teams'} price={'$1299.99'} />
      </section>
    </Layout>
  );
};

export default Subscription;
