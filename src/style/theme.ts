import { css } from "@emotion/react";
import { CSSProperties } from "react";

export type FontStyle = Pick<
  CSSProperties,
  "fontSize" | "lineHeight" | "fontWeight"
>;

//사용되는 색상 정리
export const Colors = {
  basic: {
    100: "#252945",
    200: "#7E88C3",
    300: "#7734b3",
    400: "#7C5DFA",
  },
  gray: {
    100: "#DFE3FA",
    200: "#888EB0",
    300: "#7E88C3",
    400: "#D1D5D8",
  },
  dark: {
    100: "#1E2139",
    200: "#252945",
  },
  red: {
    100: "#f2292d",
  },
};

//프로그램 내에 사용되는 폰트 사이즈 정리
export const typography: { [key: string]: FontStyle } = {
  H1: {
    fontSize: "2.6rem",
    lineHeight: "3.4rem",
    fontWeight: 700,
  },
  H2: {
    fontSize: "2.4rem",
    fontWeight: 700,
    lineHeight: "3.2rem",
  },
  H2_Regular: {
    fontSize: "2.4rem",
    fontWeight: 400,
    lineHeight: "3.2rem",
  },
  Subtitle1: {
    fontSize: "2.0rem",
    fontWeight: 700,
    lineHeight: "2.8rem",
  },
  Subtitle2: {
    fontSize: "1.8rem",
    fontWeight: 700,
    lineHeight: "2.6rem",
  },
  Subtitle3: {
    fontSize: "1.6rem",
    fontWeight: 700,
    lineHeight: "2.2rem",
  },
  Subtitle4: {
    fontSize: "1.4rem",
    fontWeight: 700,
    lineHeight: "2.0rem",
  },
  Subtitle5: {
    fontSize: "1.2rem",
    fontWeight: 700,
    lineHeight: "1.4rem",
  },
  Subtitle6: {
    fontSize: "1rem",
    fontWeight: 700,
    lineHeight: "1.2rem",
  },
  //바디 1
  Body1: {
    fontSize: "1.8rem",
    fontWeight: 400,
    lineHeight: "2.4rem",
  },
  //바디 2
  Body2: {
    fontSize: "1.6rem",
    fontWeight: 400,
    lineHeight: "2.2rem",
  },
  //바다 3
  Body3: {
    fontSize: "1.4rem",
    fontWeight: 400,
    lineHeight: "2.0rem",
  },
  Body_md1: {
    fontSize: "1.8rem",
    fontWeight: 500,
    lineHeight: "2.4rem",
  },
  Body_md2: {
    fontSize: "1.6rem",
    fontWeight: 500,
    lineHeight: "2.0rem",
  },
  Body_md3: {
    fontSize: "1.4rem",
    fontWeight: 500,
    lineHeight: "1.8rem",
  },
  Body_md4: {
    fontSize: "1.2rem",
    fontWeight: 500,
    lineHeight: "1.8rem",
  },
  Body_md5: {
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: "1.2rem",
  },
};

export const rowCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const colCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const hideScroll = css`
  --ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;
