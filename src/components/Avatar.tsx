import React from "react";
import { Box } from "@chakra-ui/react";
import AvatarImg from "../assets/img/FD_Avatar.png";
import BckImg from "../assets/img/radial.png";
import styled from "styled-components";

export const Avatar: React.FC = () => {
  return (
    <StyledBox>
      <StyledImg src={AvatarImg} />
    </StyledBox>
  );
};

const StyledImg = styled.img`
  height: 210px;
  width: 210px;
`;

const StyledBox = styled(Box)`
  height: 210px;
  width: 210px;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.55);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.55) 40%,
    rgba(255, 255, 255, 0.2) 100%
  );
  backdrop-filter: blur(2px);
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.6);
`;
