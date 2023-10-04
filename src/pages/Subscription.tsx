import React from 'react';
import Layout from '@Layout/Layout';
import Subscriptions from '@/components/content/subscription/Subscriptions';

const Subscription = (): JSX.Element => {
  return (
    <Layout>
      <section className="container w-screen px-4 mx-auto md:px-10">
        <div className='mt-8'>
          <h2 className="text-4xl font-extrabold tracking-tight text-center md:text-5xl">Our Plans</h2>
          <p className="text-lg font-medium tracking-tight text-center text-gray-500">
            Simple and affordable price plans for you and your team. Try us free for 30 days!
          </p>
        </div>
        <div className='grid grid-cols-1 gap-5 my-8 lg:grid-cols-3 lg:gap-8'>
          <Subscriptions plan={'Basic'} price={'$129.99'} />
          <Subscriptions plan={'Advanced'} price={'$329.99'} highlighted />
          <Subscriptions plan={'Teams'} price={'$1299.99'} />
        </div>
      </section>
    </Layout>
  );
};

export default Subscription;
