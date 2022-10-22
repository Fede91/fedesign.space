import React from "react";
import Img from "../assets/img/follow_me.png";
import styled from "styled-components";

export const FollowMeImg: React.FC = () => (
  <StyledImg src={Img} alt="Follow me" />
);

const StyledImg = styled.img`
  height: 104px;
  width: 137px;
`;
