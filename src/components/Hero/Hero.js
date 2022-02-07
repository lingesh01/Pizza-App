import React, { useState } from 'react';
import NavBar from "../NavBar/NavBar";
import SideBar from '../SideBar/SideBar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn } from './Hero.styles';
import { useHistory } from 'react-router-dom';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [color, setColor] = useState(false);
    const history = useHistory();

    const toggle = () => {
        setIsOpen(isOpen => !isOpen);
    }

    const navBackground = () => {
        if (window.scrollY >= 80) {
            setColor(true);
        } else {
            setColor(false)
        }

    }

    window.addEventListener("scroll", navBackground);

    const cartHandler = () => {
        history.push("/cart");
    };

    return (
        <HeroContainer id='home'>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} color={color} isOpen={isOpen} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 60 seconds</HeroP>
                    <HeroBtn onClick={cartHandler} >Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
};

export default Hero;
