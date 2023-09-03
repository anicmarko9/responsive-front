import React from 'react';

import Layout from '@Layout/Layout';
import Product from '@Components/features/Product';

const Shop = (): JSX.Element => {
  return (
    <Layout>
      <section className="w-screen mx-auto flex flex-row gap-5 mt-5 py-10 flex-wrap bg-primary justify-center">
        <Product
          title={'Product 1'}
          description={
            "Beginner's program and easy to follow to lose weight and get started into a healthy life style"
          }
          imgSrc={'@Assets/images/shop/product1.jpg'}
          price={'$199'}
        ></Product>

        <Product
          title={'Product 2'}
          description={
            "Beginner's program and easy to follow to lose weight and get started into a healthy life style"
          }
          imgSrc={'@Assets/images/shop/product2.jpg'}
          price={'$99'}
        ></Product>

        <Product
          title={'Product 3'}
          description={
            "Beginner's program and easy to follow to lose weight and get started into a healthy life style"
          }
          imgSrc={'@Assets/images/shop/product3.jpg'}
          price={'$59.99'}
        ></Product>
        <Product
          title={'Product 4'}
          description={
            "Beginner's program and easy to follow to lose weight and get started into a healthy life style"
          }
          imgSrc={'@Assets/images/shop/product4.jpg'}
          price={'$89.99'}
        ></Product>
        <Product
          title={'Product 4'}
          description={
            "Beginner's program and easy to follow to lose weight and get started into a healthy life style"
          }
          imgSrc=""
          price={'$89.99'}
        ></Product>
      </section>
    </Layout>
  );
};

export default Shop;
