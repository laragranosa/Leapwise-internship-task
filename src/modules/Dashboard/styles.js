import { styled } from "../../styles/stitches.config";

export const DashboardBody = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  height: "100%",
  maxHeight: "820px",
  justifyContent: "center",
  margin: "0px 24px 24px 24px",
  gap: "40px",
});

export const DeviceContainer = styled("div", {
  maxHeight: "100%",
  maxWidth: "100%",
  margin: "50px 10px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "space-evenly",
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
