import React from 'react';
import { SideButton, SidebarReturnListRouter, SidebarMenuListRouter, SidebarContainer, Icon, SidebarPar, CrossIcon, SidebarMenu, SidebarMenuList } from './SideBar.styles';
import { UserAuth } from '../../Context/AuthContext';

const SideBar = ({ toggle, isOpen }) => {
    const { user, logout } = UserAuth();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <SidebarContainer onClick={toggle} isOpen={isOpen}>
            <Icon>
                <CrossIcon />
            </Icon>
            <SidebarMenu>
                <SidebarPar>Hai {user?.displayName}!!!</SidebarPar>
                <SidebarMenuList href='#pizza' >Pizza</SidebarMenuList>
                <SidebarMenuList href='#sweet' >Desserts</SidebarMenuList>
                <SidebarMenuList href='#service' >Service</SidebarMenuList>
                <SidebarReturnListRouter to='/return' >Orders</SidebarReturnListRouter>
                <SidebarMenuListRouter to='/about' >About Us</SidebarMenuListRouter>
                <SideButton onClick={handleLogout} >Logout</SideButton>
            </SidebarMenu>
        </SidebarContainer>
    );
};

export default SideBar;
