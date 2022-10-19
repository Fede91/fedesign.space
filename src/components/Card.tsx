import React from "react";
import styled from "styled-components";

export const Card: React.FC<any> = ({
  url,
  cover,
  date,
  tags,
  title,
  localCover,
}) => (
  <StyledContainer>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <StyledImageWrapper>
        <img src={cover} alt={title} />
      </StyledImageWrapper>
      <div>
        <h4>{title}</h4>
      </div>
    </a>
  </StyledContainer>
);

const StyledContainer = styled.div`
  margin-bottom: 4rem;
`;

const StyledImageWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;
