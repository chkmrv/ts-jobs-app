import styled from "styled-components";
import { FlexRow } from "./";

export const JobRow = styled(FlexRow)`
  align-items: center;
    border: 1px solid #eee;
    padding: 10px;
    -webkit-transition: all ease 300ms;
    transition: all ease 300ms;
    background: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.22);
    outline: none;
`;

export const JobRowHeader = styled(FlexRow)`
  align-items: center;
  border: 1px solid #eee;
  transition: all ease 300ms;
  color: #ccc;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.22);

  & > * {
    font-size: 18px;
  }
`;

