import React from 'react';
import ProductsPage from '../ProductsPage/ProductsPage';
import { ProductContainer, ProductHeading, ProductWrapper } from "./PizzaProduct.styles";
import { data } from '../ProductsData/ProductsData';

const PizzaProduct = () => {
  return <ProductContainer id='pizza' >
    <ProductHeading>Choose your favorite</ProductHeading>
    <ProductWrapper>
      {data.map((items, index) => {
        return (
          <ProductsPage key={index} items={items} image={items.img} alt={items.alt} name={items.name} desc={items.desc} price={items.price} />
        );
      })}
    </ProductWrapper>
  </ProductContainer>;
};

export default PizzaProduct;
