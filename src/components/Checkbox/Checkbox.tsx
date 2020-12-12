import React from 'react'
import {CheckboxContainer, HiddenCheckbox, StyledCheckbox, Icon} from "../styled/Checkbox";

const Checkbox = ({ checked, ...props }) => (
  <CheckboxContainer>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} {...props}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
)

export default Checkbox
