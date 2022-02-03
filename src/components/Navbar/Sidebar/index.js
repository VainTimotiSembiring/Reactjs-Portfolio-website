import React from 'react';
import{SidebarContainer,
     Icon,
     CloseIcon,
     SidebarMenu,
     SidebarLink,
     SidebtnWrap,
     SidebarRoute,  } from '../Sidebar/SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
          <CloseIcon />
      </Icon>
      <SidebarMenu>
          <SidebarLink to ='/'>profile</SidebarLink>
          <SidebarLink to ='/'>resume</SidebarLink>
          <SidebarLink to ='/'>skill</SidebarLink>
      </SidebarMenu>
      <SidebtnWrap>
          <SidebarRoute to ='/'>Documentation</SidebarRoute>
      </SidebtnWrap>
  </SidebarContainer>
    

  
  )
};

export default Sidebar;
