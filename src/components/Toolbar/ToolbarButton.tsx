import styled from "styled-components";

export const ToolbarButton = styled.button<{ active?: boolean }>`
  border: none;
  background: none;
  color: ${props => (props.active ? "#efefef" : "#efefef44")};
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  line-height: 1.5rem;
  > i {
    color: inherit;
    line-height: 1.5rem;
    font-size: 1.2rem;
  }

  &:hover {
    color: #efefef;
    cursor: pointer;
  }
`;
