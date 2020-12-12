import styled from "styled-components";

export const FlexRow = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer

  & > * {
    flex: 1 auto;
    display: inline-block;
    vertical-align: middle;
  }
`;
