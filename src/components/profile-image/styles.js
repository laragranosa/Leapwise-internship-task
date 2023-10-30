import { styled } from "../../styles/stitches.config";

export const UploadContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: "100%",
  backgroundColor: "$greyWhite",
  borderRadius: "12px",
  flexWrap: "wrap",
});

export const ImageContainer = styled("div", {
  backgroundColor: "$greenDisabled",
  width: "200px",
  heigh: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  color: "$greenActive",
});
