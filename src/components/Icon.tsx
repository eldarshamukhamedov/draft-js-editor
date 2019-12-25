import styled from "styled-components";

export const Icon = styled.i.attrs(props => ({
  className: `${props.className} material-icons`
}))`
  color: inherit;
  font-size: inherit;
  line-height: inherit;
`;
