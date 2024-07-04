import styled, { css } from "styled-components";
import { TextProps } from "./text";

export const StyledText = styled.p<{ $bold: boolean }>`
  ${({ $bold }) =>
    $bold &&
    css`
      font-weight: bold;
    `}
`;
