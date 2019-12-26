import styled from "styled-components";
import { ToolbarButton } from "./ToolbarButton";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: inline-flex;

  ${ToolbarButton} {
    margin: 0.15rem;
  }
`;
