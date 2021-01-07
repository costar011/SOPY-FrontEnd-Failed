import React from "react";
import styled from "styled-components";
import Typist from "react-typist";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin: 0px 0px 40px 0px;
`;

const MM05Presenter = () => {
  return (
    <Wrapper>
      <Typist
        cursor={{
          show: false,
        }}
      ></Typist>
    </Wrapper>
  );
};

export default MM05Presenter;
