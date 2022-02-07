import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #000;
`;

export const FooterWrap = styled.div`
    padding: 1.6rem 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1300px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 16px auto 0 auto;

    @media (max-width:850px) {
        flex-direction: column;
    }
`;

export const SocialLog = styled.a`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    &:hover {
        color: #ffc500;
        transform: scale(1.5);
        transition: .3s ease-out;
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 24rem;
`;

export const SocialIconsLink = styled.div`
    color: #fff;
    font-size: 2.4rem;
    cursor: pointer;

    &:hover {
        color: #ffc500;
        transform: scale(1.5);
        transition: .3s ease-out;
    }
`;

export const FooterLine = styled.hr`
    color: #fff;

`;