import styled from "styled-components";
import aboutBackground from '../../images/pizza-1.jpg';
import { FaTimes } from "react-icons/fa";


export const AboutContainer = styled.div`
    background-image: linear-gradient(to right, #ff416dbe, #f84829d0),
		url(${aboutBackground});
	background-position: center;
	background-size: cover;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

export const AboutWrapper = styled.div`
	position: relative;
	width: 300px;
	height: 420px;
	background-color: #fff;
	margin: 2rem;
	box-shadow: 0 15px 25px rgba(0, 0, 0, 0.8);
	border-radius: 2rem;
	overflow: hidden;
	transition: 0.5s;
	text-align: center;

	
	&:hover {
		transform: scale(1.1);
		transition: 0.5s ease-out;
	}

	@media (max-width: 1000px) {

		& {
			margin-top: 10rem;
		}

		&:last-child {
		margin-bottom: 5rem;

		}

	}

	@media (max-width:750px) {
		&:hover {
			transform: scale(1);	
		}
	}	
`;

export const AboutCircle = styled.div`
	width: 100%;
	height: 100%; 
	background: ${({ color }) => color};
	clip-path: circle(180px at center 0);
`;

export const AboutContent = styled.div`
	position: absolute;
	top: 20rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	page-break-after: 20px;
	gap: 1rem;

	h3 {
		color: ${({ color }) => color};
		text-shadow: 1px 5px 4px #000;
		font-size: 3.5rem;
		text-align: center;
		font-weight: 900;
	}

	h6 {
		font-size: 1.4rem;
		color: #142F43;
	}

	p {
		color: ${({ color }) => color};
		letter-spacing: 2px;
	}
`;

export const AboutImg = styled.img`
	width: 15rem;
	position: absolute;
	top: 3%;
	right: 26%;
`;

export const AboutIcons = styled.div`
	position: absolute;
	bottom: 3rem;
	left: 4.4rem;
	gap: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	color: ${({ color }) => color};
	cursor: pointer;
`;

export const CrossIcon = styled(FaTimes)`
    color: #f5f6fa;
	position: absolute;
	right: 3rem;
	top: 3rem;
	font-size: clamp(3.5rem, 4vw, 5rem);
	z-index: 99;

    &:hover {
		color: #ffc500;
        transition: 0.2s ease-in-out;
    }

	&:active {
		transform: scale(0.9);

	}
`;

export const Navbar = styled.nav`
	position: absolute;
	display: flex;
	justify-content: center;
	width: 100%;
	height: 90px;
	font-size: 4rem;
	margin-top: 2.5rem;
	color: #f5f6fa;
	cursor: pointer;
	text-shadow: 0px 4px 2px #000;
`;