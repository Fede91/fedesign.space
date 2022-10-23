import { Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import Img from "../assets/img/wireframe_logo.png";

export const WireframeImg: React.FC = () => {
  const right = useBreakpointValue(
    {
      base: "0px",
      sm: "0px",
      md: "15vw",
    },
    {
      fallback: "base",
    }
  );

  return (
    <Stack
      position={"fixed"}
      right={right}
      zIndex={-2}
      top={0}
      bottom={0}
      justifyContent={"center"}
    >
      <StyledImg src={Img} alt="logo wireframe" />
    </Stack>
  );
};

const StyledImg = styled.img``;
