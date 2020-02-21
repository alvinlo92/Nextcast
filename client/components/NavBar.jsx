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
      <div className={'home'} onClick={(e) => handlePageClick(e.target.className)}>Home</div>
      <div className={'search'} onClick={(e) => handlePageClick(e.target.className)}>Search</div>
      <div className={'topcharts'} onClick={(e) => handlePageClick(e.target.className)}>Top Charts</div>
      <div className={'library'} onClick={(e) => handlePageClick(e.target.className)}>Library</div>
    </NavBarCSS>
  )
};

export default NavBar;
