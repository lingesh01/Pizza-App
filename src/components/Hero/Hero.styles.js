import styled from "styled-components";
import ImgBg from "../../images/pizza-3.jpg";

export const HeroContainer = styled.div`
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${ImgBg});
    background-position: center;
    background-size: cover;
    height: 100vh;
`
export const HeroContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 85%;
    `
export const HeroItems = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 50vw;
    margin-left: -1%;
    margin-top: 28rem;
    text-align: left;
    
    @media (max-width: 650px) {
    margin-left: 20%;
    }  
    `
export const HeroH1 = styled.h1`
    font-size: clamp(2.5rem ,7vw, 11rem);
    width: 40vw;
    color: #fff;
    border-bottom: 0.3rem solid yellow;
    border-right: 0.3rem solid yellow;
    text-transform: uppercase;
`
export const HeroP = styled.p`
    color: #fff;
    font-size: clamp(1.2rem ,3.5vw, 4.5rem);
    margin-bottom: 1.5rem;
    text-transform: uppercase;
`
export const HeroBtn = styled.button`
    border: none;
    font-size: clamp(0.8rem ,3.5vw, 2.5rem);
    margin-bottom: 2.5rem;
    padding: .5em 2em;
    color: #fff;
    background-color: black;
    border-radius: 0.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    cursor: pointer;
    transition: all .2s ease-out;

    &:hover {
        background-color: #ffc500;
        color: black;
        transition: all .5s ease-out;
        transform: translate(2px ,2px);
    }

    &:active {
        transition: all 1s ease-out;
        transform: translate(-2px ,-2px);
    }

`
