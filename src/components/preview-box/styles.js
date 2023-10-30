import { styled } from "../../styles/stitches.config";

export const BoxContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "95%",
  padding: "5px",
  marginInline: "5px",
  height: "50px",
  borderRadius: "8px",
  backgroundColor: "green",
  borderColor: "none",

  variants: {
    variant: {
      GitHub: {
        backgroundColor: "black",
      },
      YouTube: {
        backgroundColor: "$red",
      },
      LinkedIn: {
        backgroundColor: "#2D68FF",
      },
      Facebook: {
        backgroundColor: "#4267B2",
      },
    },
  },
});
