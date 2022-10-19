import React from "react";
import styled from "styled-components";
import { VStack, Text, HStack, Stack } from "@chakra-ui/react";
import PrimaryBkg from "../assets/img/Blob_Primary.png";

type Props = {
  children?: React.ReactNode;
};

export const RootLayout: React.FC<Props> = ({ children }) => {
  return <Stack direction={{ sm: "column", md: "row" }}>{children}</Stack>;
};

const StyledContainer = styled(Stack)`
  background-image: url(${PrimaryBkg}));
  background-position: -300px -600px;
  background-repeat: no-repeat, no-repeat;
`;
