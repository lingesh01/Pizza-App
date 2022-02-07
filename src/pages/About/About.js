import React from 'react';
import { Navbar, CrossIcon, AboutIcons, AboutImg, AboutContent, AboutContainer, AboutWrapper, AboutCircle } from "./About.styles";
import lingesh from "../../images/lingesh.png";
import rasiga from "../../images/rasi.png";
import roja from "../../images/roja.png";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { useHistory } from 'react-router-dom';

const About = () => {
    const history = useHistory();
    const backHandler = () => {
        history.push("/home")
    }

    return <>
        <CrossIcon onClick={backHandler} />
        <Navbar >About Us</Navbar>
        <AboutContainer>
            <AboutWrapper>
                <AboutCircle color="#FA4EAB">
                    <AboutImg src={rasiga} ></AboutImg>
                </AboutCircle  >
                <AboutContent color="#FA4EAB">
                    <h3 >Rasiga J</h3>
                    <h6>Programer</h6>
                    <h6>Information Technology</h6>
                    <p>Mettur, Salem</p>
                </AboutContent>
                <AboutIcons color="#FA4EAB">
                    <FaFacebook />
                    <FaInstagram />
                    <FaYoutube />
                    <FaTwitter />
                </AboutIcons>
            </AboutWrapper>
            <AboutWrapper>
                <AboutCircle color="#eb3b5a">
                    <AboutImg src={lingesh} ></AboutImg>
                </AboutCircle>
                <AboutContent color="#eb3b5a">
                    <h3  >Lingaraja S</h3>
                    <h6>Front End-Developer</h6>
                    <h6>Information Technology</h6>
                    <p>Bhavani, Erode</p>

                </AboutContent>
                <AboutIcons color="#eb3b5a" >
                    <FaFacebook />
                    <FaInstagram />
                    <FaYoutube />
                    <FaTwitter />
                </AboutIcons>
            </AboutWrapper>
            <AboutWrapper>
                <AboutCircle color="#01a3a4" >
                    <AboutImg src={roja} ></AboutImg>
                </AboutCircle >
                <AboutContent color="#01a3a4">
                    <h3>Roja Sree S</h3>
                    <h6>Designer</h6>
                    <h6>Information Technology</h6>
                    <p>Salem</p>
                </AboutContent >
                <AboutIcons color="#01a3a4">
                    <FaFacebook />
                    <FaInstagram />
                    <FaYoutube />
                    <FaTwitter />
                </AboutIcons>
            </AboutWrapper>
        </AboutContainer>
    </>;
};

export default About;
