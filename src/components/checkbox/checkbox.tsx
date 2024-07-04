import React, { InputHTMLAttributes } from "react";

import CheckIcon from "@/assets/icons/check";
import * as Styles from "./checkbox.styles";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Checkbox = ({ label, checked, ...props }: CheckboxProps) => (
  <Styles.Label>
    <Styles.CheckboxContainer>
      <Styles.HiddenCheckbox defaultChecked={checked} {...props} />
      <Styles.StyledCheckbox
        $checked={checked || false}
        data-testid="styled-checkbox"
      >
        {checked && <CheckIcon data-testid="check-icon" />}
      </Styles.StyledCheckbox>
    </Styles.CheckboxContainer>
    {label && <span>{label}</span>}
  </Styles.Label>
);

export default Checkbox;
