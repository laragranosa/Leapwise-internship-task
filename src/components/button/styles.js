import { styled, theme } from "../../styles/stitches.config";

export const StyledButton = styled("button", {
  width: "100%",
  height: "48px",
  border: "0",
  borderRadius: "8px",
  marginBlock: "8px",
  transition: "box-shadow 0.4s",
  fontSize: "16px",
  maxWidth: "400px",
  padding: "5px",
  cursor: "pointer",
  fontWeight: "normal",

  variants: {
    variant: {
      primary: {
        color: "$greyLight",
        backgroundColor: "$greyWhite",
      },
      login: {
        backgroundColor: "$greenDefault",
        fontWeight: "bold",
        color: "$greyWhite",
        "&:hover": {
          backgroundColor: "$greenActive",
        },
      },
      share: {
        backgroundColor: "$greenDefault",
        fontWeight: "bold",
        color: "$greyWhite",
        maxWidth: "150px",
        margin: "16px",
        "&:hover": {
          backgroundColor: "$greenActive",
        },
      },
      addLink: {
        borderColor: "$greenDefault",
        borderStyle: "solid",
        borderRadius: "8px",
        borderWidth: "2px",
        backgroundColor: "white",
        fontWeight: "bold",
        maxWidth: "100%",
        color: "$greenDefault",
        "&:hover": {
          backgroundColor: "$greenActive",
        },
      },
      preview: {
        borderColor: "$greenDefault",
        borderStyle: "solid",
        borderRadius: "8px",
        borderWidth: "2px",
        backgroundColor: "white",
        fontWeight: "bold",
        maxWidth: "120px",
        margin: "16px",
        padding: "15px",
        color: "$greenDefault",
        "&:hover": {
          backgroundColor: "$greenActive",
        },
      },
      switch: {
        maxWidth: "120px",
        padding: "8px",
        backgroundColor: "inherit",
        borderRadius: "8px",
        borderStyle: "none",
        margin: "16px",
        color: "$greyDark",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "$greenDisabled",
          color: "$greenActive",
        },
        "&:active": {
          backgroundColor: "$greenDisabled",
          color: "$greenActive",
        },
      },
      selected: {
        maxWidth: "120px",
        padding: "8px",
        backgroundColor: "inherit",
        borderRadius: "8px",
        borderStyle: "none",
        margin: "16px",
        color: "$greyDark",
        cursor: "pointer",
        backgroundColor: "$greenDisabled",
        color: "$greenActive",
      },
      remove: {
        maxWidth: "120px",
        padding: "8px",
        backgroundColor: "inherit",
        borderRadius: "8px",
        borderStyle: "none",
        margin: "0",
        textAlign: "right",
        color: "$greyDark",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "$greenDisabled",
          color: "$greenActive",
        },
        "&:active": {
          backgroundColor: "$greenDisabled",
          color: "$greenActive",
        },
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});
