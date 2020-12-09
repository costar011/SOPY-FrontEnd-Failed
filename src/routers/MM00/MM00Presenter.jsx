import React from "react";
import styled from "styled-components";
import { Wrapper, ImageBox } from "../../components/commonComponent";

const ViewText = styled.div`
  margin: 6px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => (props.isTitle ? props.theme.blackColor : ``)};
  color: ${(props) => (props.isAuthor ? props.theme.whiteColor : ``)};
  color: ${(props) => (props.isDesc ? props.theme.greyColor : ``)};
`;

const BarWrapper = styled.div`
  width: 1350px;
  height: 45px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.subThemeColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 30px 0px;
`;

const WrapWrapper = styled(Wrapper)`
  width: 1350px;
  flex-wrap: wrap; // width가 꽉 차면 자동으로 내려주는 애
`;

const MM00Presenter = () => {
  return (
    <Wrapper>
      <Wrapper width={`500px`} height={`30px`} dr={`row`}>
        <Wrapper al={`felx-end`} padding={`25px`}>
          <ImageBox
            width={`400px`}
            height={`230px`}
            bgImg={`https://images.unsplash.com/photo-1480506132288-68f7705954bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1693&q=80`}
          ></ImageBox>
        </Wrapper>
      </Wrapper>
      <Wrapper al={`flex-start`} padding={`20px`}>
        wrapper
        <ViewText size={`13.5px`} weight={`500`} isTitle={true}>
          view
        </ViewText>
      </Wrapper>
    </Wrapper>
  );
};

export default MM00Presenter;
