import styled from "styled-components";

export const ToolbarButton = styled.button<{ active?: boolean }>`
  border: none;
  background: none;
  color: ${props => (props.active ? "#efefef" : "#efefef44")};
  padding: 0.3rem;
  line-height: 1.2rem;
  font-size: 1.2rem;

  &:hover {
    color: #efefef;
    cursor: pointer;
  }
`;
