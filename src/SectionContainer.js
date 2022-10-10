import React from "react";
import { Typography, styled, Box } from "@mui/material";

const StyledTitleBox = styled(Box)(({ theme }) => ({
  width: "fit-content",
  margin: "auto",
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(10),
  textAlign: "center",
  textTransform: "uppercase",
}));

const HeaderBar = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  height: "4px",
  width: "70px",
  display: "block",
  margin: "auto",
}));

export const SectionContainer = ({ title, children }) => {
  return (
    <>
      {/* <Container> */}
      <div>
        <StyledTitleBox>
          <Typography variant="h4" sx={{ fontWeight: "700" }}>
            {title}
          </Typography>
        </StyledTitleBox>
        <HeaderBar />
      </div>
      <div>{children}</div>
      {/* </Container> */}
    </>
  );
};

export const SubTitleBox = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(9),
  paddingBottom: theme.spacing(7),
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
}));
