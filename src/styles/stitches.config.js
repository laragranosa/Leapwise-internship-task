import { createStitches } from "@stitches/react";

const stitches = createStitches({
  theme: {
    colors: {
      greenDefault: "#C6D752",
      greenActive: "#D7E472",
      greenDisabled: "#E9F0A6",
      textHeading: "#333333",
      greyDark: "#737373",
      greyLight: "#D9D9D9",
      greyWhite: "#FAFAFA",
      red: "#FF3939",
    },
    fonts: {
      instrumentSans: "InstrumentSans, sans-serif",
    },
  },
});

export const { styled, css, globalCss, keyframes, theme } = stitches;

export const globalStyles = globalCss({
  "@font-face": {
    fontFamily: "InstrumentSans",
    fontStyle: "normal",
    src: 'local("InstrumentSans"), url("InstrumentSans-Regular.ttf") format("ttf")',
  },
  html: {
    fontFamily: "$instrumentSans",
  },
});
