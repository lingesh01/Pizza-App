import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
    background-color: #ffc500;
    position: fixed;
    z-index: 999;
    width: 38rem;
    height: 100vh;
    top: 0;
    right: ${({ isOpen }) => isOpen ? "0px" : "-1000px"};
    transition: 0.5s ease-in-out;
    display: grid;
    align-items: center;

    @media (max-width: 650px) {
        width: 100vw;
    }
`;

export const Icon = styled.div`
    position: absolute;
    top: 2rem;
    right: 2.4rem;
    background-color: transparent;
    border: transparent;
    font-size: 3.5rem;
    cursor: pointer;
    outline: none;
`;

export const CrossIcon = styled(FaTimes)`
    color: #000;

    &:hover {
        color: #e31837;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarMenu = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6rem;
    position: relative;
    top: -10rem;
`;

export const SidebarMenuList = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.3rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    cursor: pointer;

    &:hover {
        color: #e31837;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarMenuListRouter = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.3rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    cursor: pointer;

    &:hover {
        color: #e31837;
        transition: 0.2s ease-in-out;
    }
`;