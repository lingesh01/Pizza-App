import React, { useState } from 'react';
import { CartNotFound, NotFoundImage, CartDeletIcon, TotalWrapper, ChartTotalButton, ChartTotalSecond, ChartTotalFirst, ChartTotal, CartTotal, QuantityMinus, QuantityValue, QuantityPlus, CartQuantity, CartH1, CartContent, CartHeading, CartImage, CartContainer, CartWrapper, CartNavbar } from "./Cart.styles";
import { useHistory } from 'react-router-dom';
import notFound from "../../images/not-found.svg";
import { useCart } from "react-use-cart";
import Modal from '../../components/Modal/Modal';

const Cart = () => {
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);
    const { totalUniqueItems, cartTotal, removeItem, emptyCart, isEmpty, items, updateItemQuantity } = useCart();

    const BuyNowHandler = () => {
        setShowModal(prev => !prev);
    }

    if (isEmpty) {
        return (
            <CartContainer>
                <CartNavbar>
                    <h1>Pizza</h1>
                    <button onClick={() => history.push("/home")}>Back</button>
                </CartNavbar>
                <CartWrapper>
                    <CartHeading>
                        <h3>Shopping Cart</h3>
                    </CartHeading>
                    <CartNotFound>
                        <h1>Your Cart is Empty!</h1>
                        <NotFoundImage src={notFound} alt="not-found" />
                    </CartNotFound>
                </CartWrapper>
            </CartContainer>
        );
    }

    return (
        <>

            <Modal showModal={showModal} setShowModal={setShowModal} />
            <CartContainer>
                <CartNavbar>
                    <h1>Pizza</h1>
                    <button onClick={() => history.push("/home")}>Back</button>
                </CartNavbar>
                <CartWrapper>
                    <CartHeading>
                        <h3>Shopping Cart</h3>
                        <h2 onClick={() => emptyCart()} >Remove all</h2>
                    </CartHeading>
                    {items.map((item, index) => {
                        return (
                            <CartContent key={index}>
                                <CartImage src={item.img} alt="image" />
                                <CartDeletIcon onClick={() => removeItem(item.id)} />
                                <CartH1>{item.name}</CartH1>
                                <CartQuantity>
                                    <QuantityMinus onClick={() => updateItemQuantity(item.id, item.quantity - 1)} />
                                    <QuantityValue>{item.quantity}</QuantityValue>
                                    <QuantityPlus onClick={() => updateItemQuantity(item.id, item.quantity + 1)} />
                                </CartQuantity>
                                <CartTotal>{`₹${item.price}`}</CartTotal>
                            </CartContent>
                        );
                    })}
                    <TotalWrapper>
                        <ChartTotal>
                            <ChartTotalFirst>
                                <h3>Sub-Total</h3>
                                <small>{`${totalUniqueItems} itmes`}</small>
                            </ChartTotalFirst>
                            <ChartTotalSecond>
                                {`₹${cartTotal}`}
                            </ChartTotalSecond>
                        </ChartTotal>
                        <ChartTotalButton>
                            <button onClick={BuyNowHandler} >Buy Now</button>
                        </ChartTotalButton>
                    </TotalWrapper>
                </CartWrapper>
            </CartContainer>
        </>
    );
};

export default Cart;
