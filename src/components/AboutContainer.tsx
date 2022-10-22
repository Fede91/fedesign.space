import { useBreakpointValue, VStack } from "@chakra-ui/react";
import React from "react";

export const AboutContainer: React.FC<any> = ({ children }) => {
  const w = useBreakpointValue(
    {
      sm: "100%",
      md: "45vw",
    },
    {
      fallback: "md",
    }
  );

  const paddingLeft = useBreakpointValue(
    {
      sm: "80px",
      md: "0",
    },
    {
      fallback: "md",
    }
  );

  const h = useBreakpointValue(
    {
      sm: "calc(100vh - 100px)",
      md: "100vh",
    },
    {
      fallback: "md",
    }
  );

  return (
    <VStack
      alignItems={"center"}
      paddingTop={"100px"}
      w={w}
      h={h}
      paddingLeft={paddingLeft}
    >
      {children}
    </VStack>
  );
};
