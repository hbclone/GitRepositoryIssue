import {
  FormControl,
  InputBaseComponentProps,
  SxProps,
  Theme,
} from "@mui/material";
import React, { FocusEvent, useCallback } from "react";
import { Colors, FontStyle, typography } from "../../style/theme";
import { MuiBasic, MuiBasicInfo } from "./MuiBasic";
import SearchIcon from "@mui/icons-material/Search";

export interface MuiTFProps extends MuiBasicInfo {
  align?: AlignSetting | undefined;
  inputProps?: InputBaseComponentProps;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  inputStyle?: FontStyle;
  onFocus?: () => void;
  wrapperProps?: SxProps<Theme>;
  name?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  endAdornment?: React.ReactNode;
  iconClick?: () => void;
}

export const MuiTextField = React.memo(
  ({
    size,
    label,
    radius = 1,
    InputProps,
    InputLabelProps,
    inputProps,
    placeholder,
    value,
    onChange,
    onClick,
    autoFocus,
    sx,
    align,
    inputStyle,
    onFocus,
    onBlur,
    name,
    onKeyPress,
    wrapperProps,
    iconClick,
  }: MuiTFProps) => {
    const inputTypography = inputStyle ?? typography.Subtitle3;

    const handleBlur = useCallback(
      (e: FocusEvent<HTMLInputElement>) => {
        if (onChange)
          onChange({
            ...e,
            target: { ...e.target, value: e.target.value.toString().trim() },
          });
        if (onBlur) onBlur(e);
      },
      [onBlur, onChange]
    );

    return (
      <FormControl sx={wrapperProps}>
        <MuiBasic
          name={name}
          value={value ? value : ""}
          label={label}
          size={size}
          placeholder={placeholder}
          onKeyPress={onKeyPress}
          onFocus={onFocus}
          variant="outlined"
          onChange={onChange}
          onClick={onClick}
          autoFocus={autoFocus}
          sx={sx}
          inputProps={{
            style: {
              ...inputTypography,
              textAlign: align,
            },
            ...inputProps,
            autoCapitalize: "none",
          }}
          InputProps={{
            style: {
              width: "100%",
              borderRadius: `${radius}rem`,
            },
            ...InputProps,
            endAdornment: (
              <SearchIcon
                onClick={iconClick}
                style={{
                  color: Colors.gray[300],
                  width: "2rem",
                  height: "2rem",
                  cursor: "pointer",
                }}
              />
            ),
          }}
          InputLabelProps={{
            style: { ...inputTypography },
            ...InputLabelProps,
          }}
          autoComplete="off"
          onBlur={handleBlur}
        />
      </FormControl>
    );
  }
);
