import styled from "styled-components";
import FeaturesImage from "../../images/featured3.jpg";

export const FeaturesContainer = styled.div`
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${FeaturesImage});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    padding: 0 2rem;

    h1 {
        font-size: clamp(3.2rem,5vw, 7.8rem);
    }

    p {
        font-size: clamp(1.3rem,3vw, 2rem);
        margin-bottom: 3rem;
    }
`

export const FeaturesBtm = styled.button`
    border: none;
    background-color: #ffc500;
    padding: 0.5em 1.5em;
    font-size: clamp(1.4rem,3vw, 2rem);
    font-weight: 600;
    letter-spacing: 0.2rem;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: 0.5s ease-out;

    &:hover {
        transform: translate(2px, 2px);
        transition: 0.5s ease-out;
        background-color: #000;
        color: #fff;
    }

    &:active {
        transform: translate(-2px, -2px);
        transition: all .5s ease-out;
    }
`;