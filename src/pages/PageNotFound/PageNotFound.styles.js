import styled from "styled-components";

export const FoundContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;


    img {
        width: 50%;
        margin-bottom: 3rem;
    }

    h1 {
        font-size: clamp(1.8rem, 4.5vw,8rem);
        color: #fdc500;
    }

`;