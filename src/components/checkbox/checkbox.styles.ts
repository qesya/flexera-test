import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const StyledCheckbox = styled.div<{ $checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: ${(props) => (props.$checked ? "salmon" : "white")};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid #ddd;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.$checked ? "visible" : "hidden")};
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;
