import React from 'react';
import { ModalWrapper, ModalContainer } from './Modal.styles';
import axios from 'axios';
import { useCart } from "react-use-cart";
import { UserAuth } from '../../Context/AuthContext';


const Modal = ({ showModal, setShowModal }) => {
    const { user, setOrderNumbers, } = UserAuth();
    const { totalUniqueItems, cartTotal } = useCart();



    const sendingOrderToDatabase = async () => {
        setOrderNumbers(prev => prev + 1);
        setShowModal(prev => !prev);
        try {

            const request = await axios({
                method: 'post',
                url: "https://pizza-app-auth-default-rtdb.firebaseio.com/pizza.json",
                data: {
                    OrderId: `704${Math.floor(Math.random() * 11)}3837${Math.floor(Math.random() * 11)}${Math.floor(Math.random() * 100)}`,
                    Name: `${user?.displayName}`,
                    TotalItems: `${totalUniqueItems}`,
                    Price: `${cartTotal}`
                }
            })
            const data = await request.json();
            console.log(data);



        } catch (err) {
            console.log(err);
        }

    }

    return (
        <>
            {showModal ? <ModalContainer>
                <ModalWrapper>
                    <h1>Thank You!</h1>
                    <p>Your items will receive as soon as possible</p>
                    <button onClick={sendingOrderToDatabase} >Okay</button>
                </ModalWrapper>
            </ModalContainer> : null}

        </>
    );
};

export default Modal;
