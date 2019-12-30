import React from "react";
import styled from "styled-components";

export const InputPrimitive = styled.input`
  align-items: center;
  background: transparent;
  border: none;
  box-sizing: border-box;
  color: inherit;
  display: inline-flex;
  font-family: inherit;
  font-size: inherit;
  justify-content: center;
  margin: 1rem;
  outline: 0;
  padding: 0.3rem;
  vertical-align: top;
  border: 1px solid #efefef;
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = (props: InputProps) => <InputPrimitive {...props} />;
