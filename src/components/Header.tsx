import React from "react";
import styled from "styled-components";
const Title = styled.h1`
  margin: 0;
  padding: 10px 15px;
  font-size: 22px;
`;

const Navbar = styled.div`
  background-size: cover;
  background-color: #000000;
  color: #ffffff;
  height: 44px;
  width: 100%;
  display: flex;
  padding: 0 10px;
  font-size: 15px;
  font-weight: 700;
`;

const Header = () => {
  return (
    <header>
      <Navbar>
        <Title>Test here</Title>
      </Navbar>
    </header>
  );
};

export default Header;
