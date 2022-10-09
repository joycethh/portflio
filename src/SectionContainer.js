import React from "react";
import {
  Container,
  Divider,
  Typography,
  Chip,
  styled,
  Box,
} from "@mui/material";

const StyledChip = styled(Chip)(({ theme }) => ({
  padding: theme.spacing(1),
  textTransform: "uppercase",
  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
    padding: theme.spacing(0.5, 1.2),
  },
}));

const StyledTitleBox = styled(Box)(({ theme }) => ({
  width: "fit-content",
  margin: "auto",
  paddingBottom: theme.spacing(2),
  paddingTop: theme.spacing(10),
  textAlign: "center",
  borderBottom: "3px solid #FF2E63",
  textTransform: "uppercase",

  // ":active": {
  //   borderBottom: "1px solid red",
  // },
}));
const SectionContainer = ({ title, children }) => {
  return (
    <>
      <Container>
        <div>
          <StyledTitleBox>
            <Typography variant="h4">{title}</Typography>
          </StyledTitleBox>
        </div>
        <div>{children}</div>
      </Container>
    </>
  );
};

export default SectionContainer;
