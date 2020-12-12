import React from "react";
import loader from "../assets/img/three-dots.svg";
import styled from "styled-components";

const LoaderImg = styled.img`
  height: 15px;
  display: block;
  margin: 0 auto;
`;

const Loader = () => {
  return <LoaderImg src={loader} alt="Loading..." />;
};

export default Loader;
