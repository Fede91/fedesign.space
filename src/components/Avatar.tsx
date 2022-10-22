import React from "react";
import { Box } from "@chakra-ui/react";
import AvatarImg from "../assets/img/FD_Avatar.png";
import styled from "styled-components";

export const Avatar: React.FC = () => {
  return (
    <StyledBox>
      <StyledImg src={AvatarImg} />
    </StyledBox>
  );
};

const StyledImg = styled.img`
  height: 192px;
  width: 157px;
`;

const StyledBox = styled(Box)`
  height: 192px;
  width: 157px;
`;
