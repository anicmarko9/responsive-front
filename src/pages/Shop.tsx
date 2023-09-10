import React from 'react';

import Layout from '@Layout/Layout';
import Product from '@Components/features/Product';

import { ProductData } from '@Mocks/product-data';
import { IProduct } from '@Types/interfaces';

const Shop = (): JSX.Element => {
  return (
    <Layout>
      <section className="mx-auto mt-3 flex w-screen flex-row flex-wrap justify-center gap-5 bg-primary py-10">
        {ProductData.map(
          (product: IProduct, index: number): JSX.Element => (
            <Product
              key={index}
              title={product.title}
              description={product.description}
              imgSrc={product.imgSrc}
              price={product.price}
            />
          ),
        )}
      </section>
    </Layout>
  );
};

export default Shop;
