import React from 'react';
import { ModalWrapper, ModalContainer } from './Modal.styles';

const Modal = ({ showModal, setShowModal }) => {
    return (
        <>
            {showModal ? <ModalContainer>
                <ModalWrapper>
                    <h1>Thank You!</h1>
                    <p>Your items will receive as soon as possible</p>
                    <button onClick={() => setShowModal(prev => !prev)} >Okay</button>
                </ModalWrapper>
            </ModalContainer> : null}
        </>
    );
};

export default Modal;
