import React, { useState } from 'react';
import { CartButton, SubcartContent, CartNotFound, NotFoundImage, CartContent, CartHeading, CartContainer, CartWrapper, CartNavbar, CartImage } from "./Return.styled.js";
import { useHistory } from 'react-router-dom';
import notFound from "./return.svg";
import { useCart } from "react-use-cart";
import Modal from '../../components/Modal/Modal';
import axios from 'axios';
import { UserAuth } from '../../Context/AuthContext.js';
import pizza from "./Pizza.gif";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/ReactToastify.min.css";




const Return = () => {
    const history = useHistory();
    const { orderNumbers, user } = UserAuth()
    const { cartTotal, totalUniqueItems } = useCart();
    const [orders, setOrders] = useState(null);
    const [btn, setBtn] = useState(false);

    const returnHandler = () => {
        toast("Success!, Your order will return as soon as possible", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setBtn(true);
    };

    const getOrders = async () => {
        try {

            const response = await axios.get('https://pizza-app-auth-default-rtdb.firebaseio.com/pizza.json');
            const ordersList = response.data;
            const first = ordersList
            setOrders(JSON.stringify(first).split(",")[1])

        } catch (err) {
            console.log(err);
        }
    };




    if (!orders) {
        return (
            <>

                <CartContainer>
                    <CartNavbar>
                        <h1>Pizza</h1>
                        <button onClick={() => history.push("/home")}>Back</button>
                    </CartNavbar>
                    <CartWrapper>
                        <CartHeading>
                            <h3>My Orders</h3>
                        </CartHeading>
                        <CartNotFound>
                            {orderNumbers === 0 && <h1>Your Order is Empty!</h1>}
                            {orderNumbers > 0 && <h1>Thank you for ordering...</h1>}
                            {orderNumbers > 0 && <h2>You have orders: {orderNumbers} </h2>}
                            {orderNumbers === 0 && <NotFoundImage src={notFound} alt="not-found" />}
                            {orderNumbers > 0 && <button onClick={getOrders} >Read more...</button>}
                        </CartNotFound>
                    </CartWrapper>
                </CartContainer>
            </>

        );
    }

    return (
        <>
            <Modal getOrders={getOrders} />
            <CartContainer>
                <CartNavbar>
                    <h1>Pizza</h1>
                    <button onClick={() => history.push("/home")}>Back</button>
                </CartNavbar>
                <CartWrapper>
                    <CartHeading>
                        <h3>My Orders</h3>
                    </CartHeading>
                    <CartContent >
                        <CartImage src={pizza} alt="image" />
                        <SubcartContent>
                            <h1>Customer name: {user?.displayName}</h1>
                            <h3>Order Id: {orders.slice(11, 23)}</h3>
                            <h2>Number of items: {totalUniqueItems}</h2>
                            <h4>Cost: ₹{cartTotal}</h4>
                        </SubcartContent>
                        <CartButton disabled={btn} onClick={returnHandler} >Return Orders</CartButton>
                    </CartContent>
                </CartWrapper>
            </CartContainer>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ToastContainer />
        </>
    );
}


export default Return
