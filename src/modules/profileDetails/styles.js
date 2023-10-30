import { styled } from "../../styles/stitches.config";

export const ProfileDetailsContainer = styled("div", {
  width: "100%",
  maxWidth: "700px",
  maxHeight: "1200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "12px",
  padding: "40px",
});

export const ComponentHeader = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "flex-start",
  justifyContent: "center",
  margin: "16px",
});

export const HeaderTitle = styled("a", {
  width: "100%",
  fontSize: "28px",
  fontWeight: "bold",
  margin: "10px 0px",
  fontFamily: "$instrumentSans",
});

export const HeaderDescription = styled("a", {
  width: "100%",
  fontSize: "16px",
  margin: "10px 0px",
  textAlign: "center",
  fontFamily: "$instrumentSans",
});

export const ProfileFieldName = styled("label", {
  width: "100%",
  maxWidth: "280px",
  display: "flex",
  alignItems: "flex-end",
  flexDirection: "row",
  height: "40px",
  padding: "16px 12px",
  fontSize: "18px",
});

export const RowComponent = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "10px",
  boxSizing: "border-box",
  maxHeight: "100px",
});

export const ProfileDataFieldsContainer = styled("form", {
  maxWidth: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "$greyWhite",
  width: "700px",
  borderRadius: "12px",
});

export const ProfileDataFormContainer = styled("div", {
  isplay: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
});

export const ProfilePictureContainer = styled("div", {
  maxWidth: "100%",
  height: "200px",
  backgroundColor: "$greyWhite",
  width: "700px",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const StyledLabel = styled("div", {
  width: "30%",
  display: "flex",
  alignItems: "center",
  margin: "10px",
  color: "$greyDark",
  fontSize: "16px",
});

export const SaveButtonContainer = styled("div", {
  width: "100%",
  height: "100%",
  justifyContent: "flex-end",
  alignItems: "center",
  display: "flex",
  flexDirection: "row",
  margin: "10px",
});
