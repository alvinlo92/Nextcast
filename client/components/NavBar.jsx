import React from 'react';
import styled from 'styled-components';

const NavBarCSS = styled.div`
  position: fixed;
  width: 230px;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  background-image: linear-gradient(#C0CDEF, #D4DCF0);
`;

const NavBar = ({ page, handlePageClick }) => {
  return (
    <NavBarCSS>
      <h1 className={'home'} onClick={(e) => handlePageClick(e.target.className)}>NextCast</h1>
      <h2 className={'home'} onClick={(e) => handlePageClick(e.target.className)}>Home</h2>
      <h2 className={'search'} onClick={(e) => handlePageClick(e.target.className)}>Search</h2>
      <h2 className={'library'} onClick={(e) => handlePageClick(e.target.className)}>Library</h2>
    </NavBarCSS>
  )
};

export default NavBar;
