import React from 'react';
import { BtnCart, ProductTitle, ProductInfo, ProductPrice, ProductButton, ProductDesc, ProductImg, ProductCart } from "./ProductsPage.styles";
import { useCart } from "react-use-cart"

const ProductsPage = ({ items, image, alt, name, desc, price }) => {
    const { addItem } = useCart();

    const clickHandler = () => {
        addItem(items);
    }

    return (
        <ProductCart >
            <ProductImg src={image} alt={alt} />
            <ProductInfo>
                <ProductTitle>{name}</ProductTitle>
                <ProductDesc>{desc}</ProductDesc>
                <ProductPrice>{`₹${price}`}</ProductPrice>
                <ProductButton  >
                    <BtnCart />
                    <div class="default" onClick={clickHandler}>Add to cart</div>
                </ProductButton>
            </ProductInfo>
        </ProductCart>
    );
};

export default ProductsPage;
