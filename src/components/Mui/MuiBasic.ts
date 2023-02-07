import { ChangeEvent } from "react";
import styled from "@emotion/styled";

import {
  FilledInputProps,
  InputLabelProps,
  InputProps,
  OutlinedInputProps,
  SelectProps,
  SxProps,
  TextField,
  Theme,
} from "@mui/material";
import { Colors, typography } from "../../style/theme";

export interface MuiBasicInfo {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  placeholder?: string;
  iconSize?: number;
  icon?: string;
  w?: number;
  h?: number;
  size?: "medium" | "small";
  sx?: SxProps<Theme>;
  label?: string;
  radius?: number;
  value?: string | number;
  helperText?: React.ReactNode;
  autoFocus?: boolean;
  InputLabelProps?: Partial<InputLabelProps>;
  InputProps?:
    | Partial<InputProps>
    | Partial<FilledInputProps>
    | Partial<OutlinedInputProps>;
  SelectProps?: Partial<SelectProps>;
  list?: string;
}

export const MuiBasic = styled(TextField)<MuiBasicInfo>`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
  }
  .MuiInput-root.Mui-disabled:before {
    border-bottom-style: solid;
  }
  .MuiFormLabel-root {
    ${typography.Body_md2};
  }
  & label.Mui-focused {
    color: ${Colors.basic[200]};
  }
  & .MuiInputLabel-root.Mui-focused.Mui-error {
    color: ${Colors.red[100]};
  }

  & .Mui-disabled {
    color: ${Colors.gray[400]};
  }
  & label.Mui-disabled {
    color: ${Colors.gray[400]};
  }
  & input.Mui-disabled {
    color: ${Colors.gray[400]};
    -webkit-text-fill-color: ${Colors.gray[400]};
  }

  & label.Mui-error {
    color: ${Colors.red[100]};
  }
  & label.Mui-error Mui-focused {
    color: ${Colors.basic[200]};
  }
  & .MuiFormLabel-filled {
    border-bottom-color: ${Colors.basic[200]};
  }
  & .MuiInput-underline:after {
    border-bottom-color: ${Colors.basic[200]};
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${Colors.basic[200]};
    }
    &.Mui-focused fieldset {
      border-color: ${Colors.gray[100]};
    }
    &.Mui-error fieldset {
      border-color: ${Colors.red[100]};
    }
  }
`;

export const MuiSelectBasic = styled(TextField)<MuiBasicInfo>`
  .MuiFormLabel-root {
    ${typography.Body_md2};
  }
  & label.Mui-focused {
    color: ${Colors.basic[200]};
  }
  & .MuiInputLabel-root.Mui-focused.Mui-error {
    color: ${Colors.red[100]};
  }

  & .MuiInputLabel-root {
    color: transparent;
  }

  & .MuiInputLabel-shrink {
    color: ${Colors.gray[400]};
  }

  & label.Mui-error {
    color: ${Colors.red[100]};
  }
  & label.Mui-error Mui-focused {
    color: ${Colors.red[100]};
  }
  & .MuiFormLabel-filled {
    border-bottom-color: ${Colors.gray[400]};
  }

  & .MuiInput-underline:after {
    border-bottom-color: ${Colors.gray[400]};
  }

  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: ${Colors.gray[100]};
    }
    &.Mui-focused fieldset {
      border-color: ${Colors.basic[200]};
    }
    &.Mui-error fieldset {
      border-color: ${Colors.red[100]};
    }
  }
`;
