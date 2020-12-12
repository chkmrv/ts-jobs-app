import styled from "styled-components";
import {Cell} from "./";

interface Checkbox {
  checked: boolean;
}

export const CheckboxContainer = styled(Cell)`
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  max-width: fit-content;
`

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  cursor: pointer;
  border: 1px solid #000;
  background: ${(props: Checkbox) => (props.checked ? '#000' : '#fff')};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.22);
  }

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }
`
