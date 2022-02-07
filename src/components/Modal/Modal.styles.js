import styled from "styled-components";

export const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;

`;

export const ModalWrapper = styled.div`
    width: 500px;
    height: 200px;
    box-shadow:0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 650px) {
        width: 400px;
    }
    @media (max-width: 420px) {
        width: 250px;
    }

    h1 {
        color: #fdc500;
        font-size: clamp(3.5rem, 4.5vw,6rem);
    }

    p {
        color: #000;
        font-size: clamp(0.5rem, 2.5vw,1.3rem);
    }

    button {
        font-size: clamp(1rem, 2.5vw,1.5rem);
        border: none;
        margin-top: 2rem;
        background: #fdc500;
        padding: 0.5em 4em;
        cursor: pointer;

        &:hover {
            color: #fdc500;
            background: #000;
        }

        &:active {
            transform: scale(0.8);
            transition: 0.5s ease-out;
        }
    }
`;