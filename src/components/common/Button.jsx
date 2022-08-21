import React from "react";
import styled from "styled-components";

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  width: ${(props) => props.width || "150px"};
  height: ${(props) => props.height || "50px"};
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    background-color: black;
  }
`;

export default Button;
