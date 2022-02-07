import React from 'react';
import { SidebarMenuListRouter, SidebarContainer, Icon, CrossIcon, SidebarMenu, SidebarMenuList } from './SideBar.styles';

const SideBar = ({ toggle, isOpen }) => {

    return (
        <SidebarContainer onClick={toggle} isOpen={isOpen}>
            <Icon>
                <CrossIcon />
            </Icon>
            <SidebarMenu>
                <SidebarMenuList href='#pizza' >Pizza</SidebarMenuList>
                <SidebarMenuList href='#sweet' >Desserts</SidebarMenuList>
                <SidebarMenuList href='#service' >Service</SidebarMenuList>
                <SidebarMenuListRouter to='/about' >About Us</SidebarMenuListRouter>
            </SidebarMenu>
        </SidebarContainer>
    );
};

export default SideBar;
