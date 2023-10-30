import { styled } from "../../styles/stitches.config";

export const LinksListContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  maxWidth: "700px",
  maxHeight: "1200px",
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "40px",
});

export const LinksScrollContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  gap: "10px",
  maxWidth: "700px",
  maxHeight: "100%",
  backgroundColor: "white",
  borderRadius: "12px",
  overflowY: "scroll",
  overflow: "auto",
  flexBasis: "750px",
});

export const LinkComponentHeader = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "flex-start",
  justifyContent: "center",
  margin: "16px",
});

export const LinkHeaderTitle = styled("a", {
  width: "100%",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "10px 0px",
  fontFamily: "$instrumentSans",
});

export const LinkHeaderDescription = styled("a", {
  width: "700px",
  fontSize: "16px",
  margin: "10px 0px",
  textAlign: "center",
  fontFamily: "$instrumentSans",
});

export const LinksForm = styled("form", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  gap: "10px",
  maxWidth: "700px",
  maxHeight: "100%",
  backgroundColor: "white",
  borderRadius: "12px",
  overflow: "auto",
  flexBasis: "750px",
});

export const SaveButtonContainer = styled("div", {
  width: "100%",
  height: "30%",
  justifyContent: "flex-end",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
});
