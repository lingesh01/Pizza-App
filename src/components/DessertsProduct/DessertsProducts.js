import React from 'react';
import ProductsPage from '../ProductsPage/ProductsPage';
import { ProductContainer, ProductHeading, ProductWrapper } from "./DessertsProducts.styles";
import { data2 } from '../ProductsData/ProductsData';

const DessertsProducts = () => {
    return <ProductContainer id='sweet' >
        <ProductHeading >Always save room for dessert</ProductHeading>
        <ProductWrapper  >
            {data2.map((items, index) => {
                return (
                    <ProductsPage key={index} items={items} image={items.img} alt={items.alt} name={items.name} desc={items.desc} price={items.price} />
                );
            })}
        </ProductWrapper>
    </ProductContainer>;
};

export default DessertsProducts;



