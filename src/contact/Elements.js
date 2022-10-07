import { Paper, styled } from "@mui/material";

export const SpeechBubble = styled(Paper)(({ theme }) => ({
  position: "relative",
  background: "#faf9f9",
  borderRadius: "10px",
  padding: 0,

  "::after": {
    content: `""`,
    position: "absolute",
    display: "block",
    width: 0,
    zIndex: 1,
    borderStyle: "solid",
    borderColor: "#faf9f9 transparent",
    borderWidth: "0 20px 20px",
    top: "-20px",
    left: "50%",
    marginLeft: "-20px",
  },
}));
