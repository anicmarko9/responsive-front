import React from 'react';
import Layout from '@Layout/Layout';
import Subscriptions from '@/components/content/subscription/Subscriptions';

const Subscription = (): JSX.Element => {
  return (
    <Layout>
      <section className="container mx-auto w-screen px-4 md:px-10">
        <div className="mt-8">
          <h2 className="text-center text-4xl font-extrabold tracking-tight md:text-5xl">
            Our Plans
          </h2>
          <p className="text-center text-lg font-medium tracking-tight text-gray-500">
            Simple and affordable price plans for you and your team. Try us free
            for 30 days!
          </p>
        </div>
        <div className="my-8 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8">
          <Subscriptions plan={'Basic'} price={'$129.99'} />
          <Subscriptions plan={'Advanced'} price={'$329.99'} highlighted />
          <Subscriptions plan={'Teams'} price={'$1299.99'} />
        </div>
      </section>
    </Layout>
  );
};

export default Subscription;
