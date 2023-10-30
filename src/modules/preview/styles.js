import { styled } from "../../styles/stitches.config";

export const PreviewHeader = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "white",
  alignItems: "center",
  height: "100%",
  width: "100%",
  borderRadius: "12px",
});

export const PreviewContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignContent: "center",
  height: "100%",
  width: "100%",
  backgroundColor: "inherit",
});

export const DeviceContainer = styled("div", {
  width: "400px",
  margin: "50px 10px",
  padding: "30px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "space-evenly",
  borderRadius: "12px",
});

export const ProfilePreview = styled("div", {
  maxHeight: "100%",
  maxWidth: "100%",
  margin: "40px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "20px",
});

export const PreviewBoxContainer = styled("div", {
  maxHeight: "100%",
  maxWidth: "100%",
  margin: "10px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "space-evenly",
  gap: "20px",
});

export const PreviewBody = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "inherit",
  maxWidth: "100%",
  height: "720px",
  backgroundSize: "cover",
});
export const Containter = styled("div", {
  backgroundColor: "$greenDefault",
  padding: "15px",
  minHeight: "100%",
  minWidth: "1024px",
  backgroundSize: "cover",
});
