import { Paper, styled } from "@mui/material";

export const SpeechBubble = styled(Paper)(({ theme }) => ({
  position: "relative",
  background: "#faf9f9",
  borderRadius: "5px",
  paddingBottom: theme.spacing(5),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  margin: theme.spacing(1),

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
