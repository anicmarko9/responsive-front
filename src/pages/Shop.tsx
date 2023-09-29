import React from 'react';

import Layout from '@Layout/Layout';
import Product from '@Components/features/Product';

import { ProductData } from '@Mocks/product-data';
import { IProduct } from '@Types/interfaces';

const Shop = (): JSX.Element => {
  return (
    <Layout>
      <section className="baseContainerX baseContainerY flex flex-wrap justify-evenly xl:justify-between">
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
