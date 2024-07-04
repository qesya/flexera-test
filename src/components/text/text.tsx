import React, { ElementType, HTMLAttributes, ReactNode } from "react";
import { StyledText } from "./text.styles";

export type TextProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
  bold?: boolean;
};

const Text = ({ as: Component = "p", children, bold, ...props }: TextProps) => {
  return (
    <StyledText as={Component} $bold={bold} {...props}>
      {children}
    </StyledText>
  );
};

export default Text;
