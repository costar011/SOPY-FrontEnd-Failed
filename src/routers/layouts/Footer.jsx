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

const FooterWrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height || `100%`};
`;

const TextBox = styled.div`
  width: 100%;
  height: 5px;
  margin: 10px;
  padding: 20px;

  align-items: center;
  justify-content: flex-start;
  transition: 0.4s;

  &:hover {
    font-weight: 700;
  }
`;

const Text = styled.div``;

const Footer = () => {
  return (
    <FooterArea>
      <FooterAreaTop>이용약관</FooterAreaTop>
      <FooterAreaContent>
        <FooterWrapper width={`450px`}>
          <FooterWrapper width={`100%`} height={`50%`}>
            로고 들어갈 자리.
          </FooterWrapper>
          <FooterWrapper width={`100%`} height={`50%`}>
            <TextBox>
              <Text>이름</Text>
              <Text> : 예림</Text>
            </TextBox>

            <TextBox>
              <Text>번호</Text>
              <Text> : 010-1234-4567</Text>
            </TextBox>
          </FooterWrapper>
        </FooterWrapper>
        <FooterWrapper width={`100%`}>right</FooterWrapper>
      </FooterAreaContent>
    </FooterArea>
  );
};

export default Footer;
