import React from 'react';
import { HeaderBlock, HeaderWrapper, NavLinkStyled } from './Header.styled';
// import { NavLink } from 'react-router-dom';
// import { Container } from 'components/App.styled';

const Header = () => {
  return (
    // <div>
    <HeaderBlock>
      {/* <span>Navbar</span> */}
      <HeaderWrapper>
        <NavLinkStyled aria-current="page" to="/">
          ContactLists
        </NavLinkStyled>

        <NavLinkStyled to="/ContactForm">AddContact</NavLinkStyled>
      </HeaderWrapper>
    </HeaderBlock>
    // </div>
  );
};

export default Header;
