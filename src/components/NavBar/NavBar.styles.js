import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


export const Nav = styled.nav`
    background-color: ${({ color }) => color ? "#fdc500" : "transparent"};
    height: 8rem;
    display:${({ isOpen }) => isOpen ? "none" : " flex"};
    width: 100%;
    justify-content: center;
    font-weight: 700;
    position: fixed;
    z-index: 999;

    @media (max-width: 750px) {
        justify-content: flex-start;
        padding-left: 2rem;
    }
`

export const NavLink = styled(Link)`
    color: ${({ color }) => color ? "#000" : "#fff"};
    font-size: clamp(3.5rem, 4vw, 8rem);   
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
     color: #e31837;
    }
`

export const NavIcons = styled.div`
    height: 8rem;
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-right: 2rem;
    cursor: pointer;
    color: ${({ color }) => color ? "#000" : "#fff"};

    p {
        font-weight: bold;
        font-size: clamp(2rem, 2.5vw, 5rem);   
        
        &:hover {
            color: #e31837;
        }
    }
`

export const Bar = styled(FaPizzaSlice)`
    font-size: clamp(2.8rem, 3vw, 5.3rem);   

    &:hover {
        color: #e31837;
        transition: 0.2s ease-in-out;
    }
`;



export const CartDiv = styled.div`
    height:25px;
    width:25px;
    background-color:#21c999;
    color:white;
    font-size: 22px;
    position:relative;
    transform: rotate(-50deg);
    border-radius:2px;
    top:-16px;
    left:-13px;
    padding:10px;
    z-index:0;
    text-align:center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 750px) {
        height:18px;
        width:18px;
        font-size: 17px;
        left: -10px;
        top: -16px;
    }    
`;

export const CartIcons = styled(FaShoppingCart)`
    font-size: 4.5rem;
    opacity:1;
    z-index: 2;
    color:${({ color }) => color ? "gray" : "#fff"};
    position:absolute;
    left: -3rem;
    top: 2rem;

    @media (max-width: 750px) {
        font-size: 3.5rem;
        left: -2rem;
    }    

    &:active {
        transform: scale(1.3);
        transition: .5s ease-out;
    }

    
`;