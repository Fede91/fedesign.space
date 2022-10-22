import { Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

export const Container: React.FC<any> = ({ children }) => {
  const h = useBreakpointValue(
    {
      sm: undefined,
      md: "100vh",
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

  const paddingTop = useBreakpointValue(
    {
      sm: "0px",
      md: "5.625rem",
    },
    {
      fallback: "md",
    }
  );

  return (
    <Stack
      w={{ sm: "100vw", md: "55vw" }}
      h={h}
      overflowY="scroll"
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      paddingBottom={"7rem"}
    >
      {children}
    </Stack>
  );
};
