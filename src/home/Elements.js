import { styled, Box, Button } from "@mui/material";

export const AvatarBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
}));

// export const BioBox = styled(Box)(({ theme }) => ({
//   color: "#fcfcfc",
//   paddingRight: theme.spacing(25),
//   [theme.breakpoints.down("md")]: {
//     display: "flex",
//     justifyContent: "center",
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(2),
//   },
// }));

export const BioBox = styled(Box)(({ theme }) => ({
  color: "#fcfcfc",
  [theme.breakpoints.up("md")]: {
    paddingRight: theme.spacing(25),
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const StyledSpan = styled("span")(({ theme }) => ({
  padding: "0 2px",
  color: "#003e41",
  fontWeight: 600,
}));
export const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(0),
  wordSpacing: theme.spacing(0.5),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
