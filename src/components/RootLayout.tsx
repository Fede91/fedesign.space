import React from "react";
import styled from "styled-components";
import { VStack, Text, HStack, Stack } from "@chakra-ui/react";
import PrimaryBkg from "../assets/img/Blob_Primary.png";

type Props = {
  children?: React.ReactNode;
};

export const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <StyledContainer direction={{ sm: "column", md: "row" }}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled(Stack)`
  &:before {
    content: " ";
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-image: url(${PrimaryBkg});
    background-position: -300px 38vh;
    background-repeat: no-repeat, no-repeat;
    z-index: -100;
  }
`;
