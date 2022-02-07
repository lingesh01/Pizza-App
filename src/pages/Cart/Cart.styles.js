import styled from "styled-components";
import background from "../../images/pizza-2.jpg";
import { FiPlus, FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";


export const CartContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url(${background});
    background-position: center;
    background-size: cover;
`;

export const CartNavbar = styled.nav`
    height: 8rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: #fff;
        margin-left: 4rem;
        font-size: clamp(2.2rem,4vw,3.5rem);
        letter-spacing: 0.2rem;
    }

    button {
        border: none;
        margin-right: 3.5rem;
        font-size: clamp(1rem,4vw,2rem);
        background-color: #fdc500;
        color: #323232;
        padding: 0.5rem 3rem;
        cursor: pointer;
        letter-spacing: 1px;
        border-radius: 2px;

        &:hover {
            background-color: #fff;
            color: #000;
        }

        &:active {
            transform: scale(0.8);
            transition: .5s ease-out;
        }
    }


`;

export const CartWrapper = styled.div`
    background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-left: 1px solid rgba(255, 255, 255, 0.5);
	backdrop-filter: blur(4px);
    min-height: 85vh;
    width: calc(100% - 100px);
    margin: 0 auto;
    border-radius: 1rem;
`;

export const CartHeading = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7rem;

    @media (max-width: 650px) {
        margin-bottom: 5rem;
    }

    @media (max-width: 460px) {
        flex-direction: column;
        
    }

    h3 {
        margin-left: 2rem;
        font-size:clamp(2.5rem, 4vw, 3.5rem);
        color: #FFF8F3;
        text-shadow: 0 2px 4px #EF2F88;

        @media (max-width: 460px) {
            margin: 0 auto;
        }
    }

    h2 {
        margin-right: 2rem;
        cursor: pointer;
        color:#DA1212;
        font-size: 2rem;

        &:active {
          transform: scale(0.8);
        }

        @media (max-width: 460px) {
            margin: 0 auto;
        }
    }
    `;



export const CartContent = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 0.5fr 1.5fr 0.5fr; 
    grid-template-rows: 1fr;
    align-items: center;   
    justify-items:center;
    background-color: #fdc500;
    height: 29vh;
    width: calc(100% - 60px);
    padding: 1rem 3rem;
    margin: 0 auto;
    margin-bottom: 1rem;

    @media (max-width: 650px) {
        grid-template-columns: 1fr 0.5fr; 
        grid-template-rows: 0.5fr 0.9fr;
    }

    @media (max-width: 460px) {
        grid-template-columns: 1fr; 
        grid-template-rows: 0.5fr 0.9fr;
        height: 45vh;
    }

    
`;

export const CartDeletIcon = styled(MdDelete)`
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
    cursor: pointer;

    @media (max-width: 650px) {
        font-size: 2.5rem;
    }

    @media (max-width: 460px) {
        font-size: 2rem;
    }

    &:hover {
        color: red;
    }

    &:active {
        transform: scale(0.8);
    }
`;

export const CartImage = styled.img`
    width: 20rem;
    height: 15rem;
    max-width: 15rem;

    @media (max-width: 460px) {
            margin-bottom: 10px;
            
    }

    @media (max-width: 380px) {
        width: 10rem;
        height: 15rem
    } 
`;

export const CartH1 = styled.h1`

    font-size: clamp(2rem, 4vw, 2.5rem);

    @media (max-width: 650px) {
        grid-row-start: 2;
        grid-row-end: 3;
        font-size: 1rem;
    }

    @media (max-width: 460px) {
            margin-bottom: 10px;
        }
`;

export const CartQuantity = styled.h1`
    display: flex;
    align-items: center; 
    justify-content: space-between;
    width: 13rem;
    
    @media (max-width: 650px) {
        width: 11rem;
        margin-left: 1rem;
    }

`;

export const QuantityPlus = styled(FiPlus)`
    background-color: #000000;
    color: #fff;
    padding: 2px;
    font-size: clamp(1.5rem, 3vw, 2rem);
    border-radius: 50px;

    &:hover {
       transform: scale(1.1);
    }

    &:active {
       transform: scale(0.8);
    }
`;

export const QuantityValue = styled.h3`
    background-color: #000;
    padding: 0.05em 0.7em;
    color: #eee;
    font-size: clamp(1.5rem, 4vw, 2.5rem);
`;

export const QuantityMinus = styled(FiMinus)`
    background-color: #000000;
    color: #fff;
    padding: 2px;
    font-size: clamp(1.5rem, 3vw, 2rem);
    border-radius: 50px;

    &:hover {
       transform: scale(1.1);
    }

    &:active {
       transform: scale(0.8);
    }
`;


export const CartTotal = styled.div`
    font-size: clamp(2.5rem, 3vw, 4rem);
`;

export const TotalWrapper = styled.div`
    margin-top: 5rem;
    
`;




export const ChartTotal = styled.div`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    margin-right: 3rem;

    @media (max-width: 650px) {
        justify-content: center;
        margin-right: 0rem;
    }
`;

export const ChartTotalFirst = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 5rem;

    h3 {
        font-size: clamp(2.5rem, 4vw, 3.5rem);
        color: #FEE3EC;
        text-shadow: 0 2px 4px #EF2F88;

        @media (max-width:360px) {
            font-size: 1.7rem;
        }
    }
     
    small {
        font-size: clamp(0.5rem, 4vw, 1rem);
        color:#150050;
    }

`;

export const ChartTotalSecond = styled.div`
    display: flex;
    align-items: center;
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    color: #fff;
    font-size: clamp(3.5rem, 4vw, 5rem);
    text-shadow: 0 2px 4px #EF2F88;

    @media (max-width:360px) {
            font-size: 2rem;
    }

    
`;

export const ChartTotalButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 3rem;
    margin-top: 2rem;

    @media (max-width: 650px) {
        justify-content: center;
        margin-right: 0rem;

    }


    button {
        width: 30rem;
        border: none;
        padding: 3px 0;
        background-color: #000;
        color: #fff;
        border-radius: 3px;
        cursor: pointer;
        transition: 0.5s;
        margin-bottom: 3rem;

            
        &:hover {
            background-color: #fdc500;
            color: #000;
        }

        &:active {
            transform: scale(0.8);
        }

        @media (max-width: 650px) {
            width: 20rem; 
        }

        
    }

`;

export const CartNotFound = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: clamp(2.5rem, 4vw, 4.5rem);
        color:#fff;
        text-shadow: 0 2px 4px #fdc500;

    }
    
`;

export const NotFoundImage = styled.img`
    width: 40rem;
    height: 40rem;

    @media (max-width: 650px) {
        width: 31rem;
        height: 31rem;
    }

    @media (max-width: 450px) {
        width: 20rem;
        height: 20rem;
    }
`;






