import Layout from '@Components/layout/Layout';
import React from 'react';
import Store from '@Components/Shop/Store';

const Shop = (): JSX.Element => {
  return (
    <Layout>
      <section className="w-full h-auto mt-5 py-10 bg-primary">
        <div className=" mx-auto flex flex-row gap-5 flex-wrap justify-center items-center md:w-3/5 w-5/6">
          <Store
            title={'Product 1'}
            description={
              "Beginner's program and easy to follow to lose weight and get started into a healthy life style"
            }
            imgSrc={'../Shop/product1.jpg'}
            price={'$199'}
          ></Store>
          <Store
            title={'Product 1'}
            description={
              "Beginner's program and easy to follow to lose weight and get started into a healthy life style"
            }
            imgSrc={'../Shop/product2.jpg'}
            price={'$99'}
          ></Store>
          <Store
            title={'Product 1'}
            description={
              "Beginner's program and easy to follow to lose weight and get started into a healthy life style"
            }
            imgSrc={'../Shop/product3.jpg'}
            price={'$59.99'}
          ></Store>
          <Store
            title={'Product 1'}
            description={
              "Beginner's program and easy to follow to lose weight and get started into a healthy life style"
            }
            imgSrc={'../Shop/product4.jpg'}
            price={'$89.99'}
          ></Store>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
