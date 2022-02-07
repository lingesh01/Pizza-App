import styled from "styled-components";

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
    text-transform: uppercase;
    letter-spacing: 0.2rem;
`;

export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;