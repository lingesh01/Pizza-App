import React from 'react';
import { CartIcons, CartDiv, Bar, Nav, NavIcons, NavLink } from './NavBar.styles';
import { useHistory } from 'react-router-dom';
import { useCart } from "react-use-cart";
import { UserAuth } from '../../Context/AuthContext';


const Navbar = ({ toggle, color, isOpen }) => {
    const history = useHistory();
    const { totalUniqueItems } = useCart();
    const { logout } = UserAuth();

    const openCartHandler = () => {
        history.push("/cart");
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <Nav color={color} isOpen={isOpen} >
                <NavLink color={color} to="/" >Pizza</NavLink>
                <NavIcons color={color} >
                    <CartDiv>{totalUniqueItems}</CartDiv>
                    {/* <button  >Logout</button> */}
                    <CartIcons color={color} onClick={openCartHandler} />
                    <button onClick={handleLogout}>Logout</button>
                    <Bar onClick={toggle} />
                </NavIcons>
            </Nav>
        </>



    );
};

export default Navbar;
