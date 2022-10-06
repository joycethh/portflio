import { styled, Box, Button } from "@mui/material";

export const AvatarBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
}));

export const BioBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(0),
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
