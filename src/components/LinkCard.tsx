import React from "react";
import { Link as CLink } from "@chakra-ui/react";
import styled from "styled-components";
import { VStack, Text, Box } from "@chakra-ui/react";

type Props = {
  title: string;
  cta?: string;
  description?: string;
  url: string;
  img?: string;
};

export const LinkCard: React.FC<Props> = ({
  title,
  cta,
  url,
  description,
  img,
}) => {
  return (
    <VStack w="260px" padding="10px" paddingLeft="5px">
      <StyledLink href={url} isExternal>
        <Box
          w="100%"
          borderRadius="1.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          backgroundColor="#F6F6F6"
        >
          <Box
            w="100%"
            backgroundSize="cover"
            paddingTop="56.25%"
            backgroundImage={img}
          />
        </Box>
        <Text
          fontWeight="600"
          fontSize="1.125rem"
          marginTop="1rem"
          marginBottom="0.5rem"
        >
          {title}
        </Text>

        {description && (
          <Text opacity="0.5" lineHeight="1.2rem">
            {description}
          </Text>
        )}

        {cta && (
          <Box
            w="90%"
            display="flex"
            position="absolute"
            overflow="hidden"
            textOverflow="ellipsis"
            fontSize="0.875rem"
            fontWeight="800"
            left="5%"
            bottom="1.125rem"
            paddingTop="0.625rem"
            paddingBottom="0.625rem"
            justifyContent="center"
          >
            {cta}
          </Box>
        )}
      </StyledLink>
    </VStack>
  );
};

const StyledLink = styled(CLink)`
  box-shadow: 0px 0px 20px rgba(11, 17, 52, 0.1);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2.5rem;
  padding: 1rem;
  min-height: 22.5rem;
  max-height: 22.5rem;
  width: 100%;

  backdrop-filter: blur(2px);

  &:hover {
    text-decoration: none !important;
  }
`;
