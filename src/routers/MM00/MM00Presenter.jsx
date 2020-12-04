import React from "react";
import styled from "styled-components";
import { Wrapper, ImageBox } from "../../components/commonComponent";

const Text = styled.div`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => (props.isTitle ? props.theme.blackColor : ``)};
  color: ${(props) => (props.isAuthor ? props.theme.whiteColor : ``)};
  color: ${(props) => (props.isDesc ? props.theme.greyColor : ``)};
  margin: 10px;
`;

const BarWrapper = styled.div`
  width: 1350px;
  height: 50px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.subThemeColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 30px 0px;
`;

const MM00Presenter = () => {
  return <Wrapper></Wrapper>;
};

export default MM00Presenter;
