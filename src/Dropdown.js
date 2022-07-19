import React from "react";
import {
  DropdownWrapper,
  StyledSelect,
  StyledOption,
  StyledLabel,
} from "./styles.js";

export function Dropdown(props) {
  return (
    <DropdownWrapper action={props.action} onChange={props.onChange}>
      <StyledLabel htmlFor="market">{props.formLabel}</StyledLabel>
      <StyledSelect id="market" name="market">
        {props.children}
      </StyledSelect>
    </DropdownWrapper>
  );
}

export function Option(props) {
  return <StyledOption selected={props.selected}>{props.value}</StyledOption>;
}
