import { styled, theme } from "../../styles/stitches.config";

export const FormContainer = styled("div", {
  width: "50%",
  border: "bold",
  borderWidth: "1px",
  margin: "auto",
  borderColor: "black",
  padding: "10px",
  borderStyle: "solid",
  borderRadius: "15px",
  height: "100%",
  marginTop: "50px",
  backgroundColor: "$greyWhite",
});

export const StyledForm = styled("form", {
  width: "60%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "$20 $8 $8",
  boxSizing: "border-box",
  justifyContent: "center",
  backgroundColor: "$greyWhite",
  margin: "auto",
  "> div + div": {
    marginTop: "$6",
  },
  "input + a": {
    marginTop: "10px",
    alignItems: "flex-start",
  },
  "button + a": {
    marginTop: "10px",
    justifyContent: "center",
  },
});

export const NeedAnAccount = styled("div", {
  display: "flex",
  justifyContent: "center",
  fontSize: "13px",
  marginTop: "10px",
  a: { color: "#3FB2C1", display: "block", margin: "20px 2px" },
  "a:hover": {
    textDecoration: "underline",
  },
  p: { display: "block", margin: "20px 2px" },
});
