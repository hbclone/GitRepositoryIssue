import styled from "@emotion/styled";
import React from "react";
import { colCenter, Colors } from "../style/theme";
import BlockIcon from "@mui/icons-material/Block";
import { Body2, Body_md2 } from "./Mui/Typography";

const Nothing = () => {
  return (
    <Wrapper>
      <BlockIcon
        style={{ width: "20rem", height: "15rem", color: Colors.gray[200] }}
      />
      <Body_md2 color={Colors.gray[200]}>검색 결과가 없습니다</Body_md2>
    </Wrapper>
  );
};

export default Nothing;

const Wrapper = styled.div`
  min-height: 100vh;
  ${colCenter};
  background-color: ${Colors.dark[100]};
`;
