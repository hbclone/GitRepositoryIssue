import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { SxProps, Theme } from "@mui/material";
import { Colors, FontStyle, typography } from "../../style/theme";

export interface ButtonStyleProps {
  br?: number;
  sx?: SxProps<Theme>;
  bg?: string;
  tc?: string;
  children?: ReactNode;
}
export interface ButtonProps extends ButtonStyleProps {
  title: string;
  canConfirm?: boolean;
  textStyle?: FontStyle;
  onClick?: (e?: any) => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
}
const FilledButton = ({
  title,
  onClick,
  br,
  sx,
  bg,
  textStyle = typography.Subtitle4,
  tc = Colors.gray[100],
  canConfirm = true,
  type = "submit",
  disabled = false,
  children,
}: ButtonProps) => {
  return (
    <StyledButton
      br={br || 0.5}
      bg={bg ? bg : canConfirm ? Colors.basic[400] : Colors.gray[100]}
      onClick={canConfirm ? onClick : undefined}
      sx={sx}
      type={type}
      disabled={disabled}
    >
      {children ? (
        children
      ) : (
        <span
          style={{
            ...textStyle,
            textAlign: "center",
            color: tc,
          }}
        >
          {title}
        </span>
      )}
    </StyledButton>
  );
};

export default React.memo(FilledButton);

const StyledButton = styled(Button)<ButtonStyleProps>`
  white-space: nowrap;
  border-radius: ${(props) => props.br}rem;
  color: ${Colors.basic[100]};
  background-color: ${({ bg }) => bg};
  &:hover {
    background-color: ${({ bg }) => bg};
  }
  &.Mui-disabled {
    background: ${Colors.gray[200]};
  }
`;
