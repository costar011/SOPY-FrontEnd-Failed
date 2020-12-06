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

const WrapWrapper = styled(Wrapper)`
  width: 1350px;
  flex-wrap: wrap; // width가 꽉 차면 자동으로 내려주는 녀석이다.
`;

const MM00Presenter = () => {
  return (
    <Wrapper>
      <Wrapper width={`500px`} height={`30px`} dr={`row`}>
        <Wrapper al={`felx-end`} padding={`25px`}></Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default MM00Presenter;
