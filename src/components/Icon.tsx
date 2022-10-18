import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon: string;
};

export const Icon: React.FC<Props> = ({ icon }) => {
  // @ts-ignore
  return <FontAwesomeIcon icon={icon.split("-")} size="lg" />;
};
