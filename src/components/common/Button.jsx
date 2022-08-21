/* Package */
import React from "react";
import styled from "styled-components";

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  width: ${(props) => props.width || "170px"};
  height: ${(props) => props.height || "40px"};
  border: 1px solid;
  cursor: pointer;
  background-color: white;

  &:disabled {
    cursor: not-allowed;
    border: 1px solid;
    background-color: white;
  }
`;

export default Button;
