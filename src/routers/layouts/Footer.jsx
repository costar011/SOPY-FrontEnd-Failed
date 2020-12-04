import React from "react";
import styled from "styled-components";

const FooterArea = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${(props) => props.theme.blackColor};
  color: ${(props) => props.theme.whiteColor};
`;

const FooterAreaTop = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.greyColor};
  color: ${(props) => props.theme.whiteColor};
`;

const FooterAreaContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.blackColor};
  color: ${(props) => props.theme.whiteColor};
  display: flex;
  flex-direction: row;
  padding: 25px;
`;

const Footer = () => {
  return `Footer`;
};

export default Footer;
