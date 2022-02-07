import styled from "styled-components";
import { BsFillCartFill } from "react-icons/bs";
import { BiCartAlt } from 'react-icons/bi';

export const ProductContainer = styled.div`
    background: #000;
    width: 100%;
    min-height: 100vh;
    padding: 7.8rem calc((100vw - 1300px) / 2);
    color: #fff;
`;

export const ProductHeading = styled.h1`
    font-size: clamp(3rem ,4vw, 5rem);
    text-align: center;
    margin-bottom: 7.9rem;
`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const ProductCart = styled.div`
    margin: 0 4.5rem;
    line-height: 2;
    width: 300px;
    text-align: center;
    margin-bottom: 7rem;

    &:last-child {
        margin-bottom: -6rem;
    }
`;

export const ProductImg = styled.img`
    width: 30rem;
    height: 30rem;
    max-width: 100%;
    box-shadow: 8px 8px #fdc500;

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
        transition: .3s ease-out;
    }

    @media (max-width:850px) {
        transform: none;
    }

    
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2.5rem;
    gap: 0.5rem;
`;

export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 3rem;
`;

export const ProductDesc = styled.p`
    font-size: 1.3rem;
    font-weight: 400;
`;

export const ProductPrice = styled.h3`
    font-size: 3.5rem;
`;


export const FirstIcons = styled(BsFillCartFill)`
    position: absolute;
    top: 1.5rem;
    left: ${({ isBtnCondition }) => isBtnCondition ? "0.8rem" : "01rem"} ;
    transition: 0.5 ease-in-out;
`;

export const ProductButton = styled.button`
    border: none;
    font-size: 2rem;
    padding: 1rem 2.5rem;
    border-radius: 1rem;
    cursor: pointer;
    color: #150f0f;
    background-color: #fdc500;
    position: relative;

    &:hover {
        background: #fff;
        color: #000;
        transition: 0.5s ease-out;
        transform: translate(3px, 3px);
    }

    &:active {
        transition: 0.3ss ease-out;
        transform: scale(.7);
    }

    
`;

export const BtnCart = styled(BiCartAlt)`
    position: absolute;
    left: 0.5rem;
    top: 1.6rem;
`;


