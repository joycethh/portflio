import { styled, Box, Button } from "@mui/material";

export const AvatarBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
}));

export const BioBox = styled(Box)(({ theme }) => ({
  paddingRight: theme.spacing(25),
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(0),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
