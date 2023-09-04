import React from 'react';

import Layout from '@Layout/Layout';
import Product from '@Components/features/Product';
import { ProductData } from '@Mocks/product-data';
import { IProduct } from '@Types/interfaces';

const Shop = (): JSX.Element => {
  return (
    <Layout>
      <section className="w-screen mx-auto flex flex-row gap-5 mt-5 py-10 flex-wrap bg-primary justify-center">
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
