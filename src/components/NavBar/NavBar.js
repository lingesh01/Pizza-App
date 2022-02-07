import React from 'react';
import { CartIcons, CartDiv, Bar, Nav, NavIcons, NavLink } from './NavBar.styles';
import { useHistory } from 'react-router-dom';
import { useCart } from "react-use-cart";

const Navbar = ({ toggle, color, isOpen }) => {
    const history = useHistory();
    const { totalUniqueItems } = useCart();

    const openCartHandler = () => {
        history.push("/cart");
    };

    return (
        <Nav color={color} isOpen={isOpen} >
            <NavLink color={color} to="/" >Pizza</NavLink>
            <NavIcons color={color} >
                <CartDiv>{totalUniqueItems}</CartDiv>
                <CartIcons color={color} onClick={openCartHandler} />
                <p onClick={toggle}>Menu</p>
                <Bar onClick={toggle} />
            </NavIcons>
        </Nav>



    );
};

export default Navbar;
