import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import SearchContainer from '../containers/SearchContainer';

const StyledTopbar = styled.div`
  position: fixed;
  background-color: transparent;
  height: 60px;
  top: 0;
  left: 230px;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  margin: 0 25px;
`;

const Button = styled.button`
  background-color: grey;
  color: black;
  border: none;
  border-radius: 8px;
  width: 50px;
  height: 30px;
  font-size: 20px;
`;

const RightButton = styled(Button)`
  margin-left: 5px;
`;

const Topbar = () => {
  const history = useHistory();
  return (
    <StyledTopbar>
      <Button type="Button" onClick={() => history.goBack()}>&lt;</Button>
      <RightButton type="Button" onClick={() => history.goForward()}>&gt;</RightButton>
      <SearchContainer />
    </StyledTopbar>
  );
};

export default Topbar;
