import { styled } from "../../styles/stitches.config";

export const InputContainer = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$greyWhite",
  marginBlock: "24px",
});

export const InputTitle = styled("a", {
  width: "100%",
  fontSize: "16px",
  height: "18px",
  color: "$textHeading",
  padding: "8px",
});

export const StyledInput = styled("input", {
  width: "100%",
  height: "48px",
  fontSize: "16px",
  border: "normal",
  borderRadius: "8px",
  boxSizing: "border-box",
  padding: "16px 12px",
  "&::placeholder": { color: "#aaa" },
  "&:focus-visible": { outline: "none" },

  variants: {
    variant: {
      error: {
        width: "100%",
        height: "48px",
        fontSize: "16px",
        border: "normal",
        borderRadius: "8px",
        boxSizing: "border-box",
        padding: "16px 12px",
        borderColor: "$red",
      },
      default: {
        borderWidth: "1px",
        borderColor: "#d9d9d9",
        transition: "border-color 0.2s, background-color 0.2s",
        "&:focus": {
          borderColor: "#d9d9d9",
          backgroundColor: "white",
        },
        "&::placeholder": {
          textTransform: "capitalize",
        },
        "&::selection": {
          backgroundColor: "#f5d2a5",
        },
      },
      authSubmit: {
        alignSelf: "center",
        backgroundColor: "#10434E",
        color: "#fff",
        borderRadius: "20px",
        fontSize: "$base",
        marginTop: "20px",
        fontWeight: "bold",
        cursor: "pointer",
        border: "none",
        letterSpacing: "0.5px",
        "&:hover": {
          backgroundColor: "#1d6c7d",
        },
      },
    },
  },

  defaultVariants: {
    variant: "default",
  },
});
