import React from "react";
import { Link as CLink } from "@chakra-ui/react";
import styled from "styled-components";
import { Icon } from "./Icon";
import { ImageIcon } from "./ImageIcon";

type Props = {
  title: string;
  url: string;
  variant?: "primary" | "secondary";
  icon?: string;
  imgIcon?: string;
};

export const Link: React.FC<Props> = ({
  title,
  url,
  variant = "secondary",
  icon,
  imgIcon,
}) => {
  const BaseLink =
    variant === "secondary" ? StyledSecondaryLink : StyledPrimaryLink;

  return (
    <BaseLink
      href={url}
      isExternal
      width="100%"
      borderRadius="0.625rem"
      fontSize="1.125rem"
      fontWeight="600"
      textAlign="center"
      padding="0.75rem"
      position="relative"
    >
      {(icon || imgIcon) && (
        <StyledIconContainer>
          {icon && <Icon icon={icon} />}
          {imgIcon && <ImageIcon src={imgIcon} />}
        </StyledIconContainer>
      )}
      {variant === "primary" ? (
        <>
          {title.split(".")[0]}
          {title.indexOf(".") > 0 && (
            <span style={{ color: "#fff" }}>
              .{title.substring(title.indexOf(".") + 1)}
            </span>
          )}
        </>
      ) : (
        title
      )}
    </BaseLink>
  );
};

const StyledPrimaryLink = styled(CLink)`
  background-color: rgba(61, 173, 255, 0.85); /*#3dadff;*/
  backdrop-filter: blur(2px);
  color: #fff;

  &:hover {
    text-decoration: none !important;
  }
`;

const StyledSecondaryLink = styled(CLink)`
  backdrop-filter: blur(2px);
  color: #2c2c2c;

  border: 1px solid #f5f5f5;

  &:hover {
    text-decoration: none !important;
  }
`;

const StyledIconContainer = styled.div`
  position: absolute;
  left: 0.875rem;
  top: 0.875rem;
`;
