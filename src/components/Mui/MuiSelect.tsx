import { FormControl, MenuItem, SxProps, Theme } from "@mui/material";
import React from "react";
import { Colors, typography } from "../../style/theme";
import { MuiBasic, MuiBasicInfo } from "./MuiBasic";
import { Body_md2, Body_md4 } from "./Typography";

export type DropList<T = string> = {
  value: string;
  label: T;
}[];

export interface MuiSelectProps extends MuiBasicInfo {
  dropList: DropList;
  wrapperProps?: SxProps<Theme>;
  shrink?: boolean;
  disabled?: boolean;
}

export const MuiSelect = React.memo(
  ({
    value,
    sx,
    onChange,
    label,
    radius = 1,
    dropList,
    InputProps,
    SelectProps,
    placeholder = "",
    wrapperProps,
    shrink,
    disabled = false,
  }: MuiSelectProps) => {
    return (
      <FormControl sx={wrapperProps}>
        <MuiBasic
          variant={"outlined"}
          value={value}
          defaultValue={-1}
          label={label}
          disabled={disabled}
          onChange={onChange}
          fullWidth
          select
          sx={sx}
          InputProps={{
            ...InputProps,
          }}
          InputLabelProps={{
            shrink: shrink,
            style: {
              ...typography.Subtitle5,
              color: Colors.gray[200],
            },
          }}
          SelectProps={{
            style: {
              ...typography.Subtitle6,
              borderRadius: `${radius}rem`,
              height: "100%",
              color: Colors.gray[200],
            },
            MenuProps: {
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
            },
            ...SelectProps,
          }}
        >
          {placeholder ? (
            <MenuItem
              style={{
                ...typography.Subtitle6,
                display: "none",
              }}
              key={placeholder}
              value={-1}
              selected
              disabled
              hidden
            >
              <Body_md4 color={Colors.gray[100]} style={{ textAlign: "end" }}>
                {placeholder}
              </Body_md4>
            </MenuItem>
          ) : null}

          {dropList?.map((item: any) => (
            <MenuItem
              style={{ ...typography.Body_md4 }}
              key={item.value}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          ))}
        </MuiBasic>
      </FormControl>
    );
  }
);
