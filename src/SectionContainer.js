import React from "react";
import { Container, Divider, Chip, styled } from "@mui/material";

const StyledChip = styled(Chip)(({ theme }) => ({
  padding: theme.spacing(1),
  textTransform: "uppercase",
  [theme.breakpoints.up("md")]: {
    fontSize: "18px",
    padding: theme.spacing(0.5, 1.2),
  },
}));

const SectionContainer = ({ title, children }) => {
  return (
    <>
      <Container>
        <div>
          <Divider color="primary">
            <StyledChip label={title} size="large" color="primary" />
          </Divider>
        </div>
        <div>{children}</div>
      </Container>
    </>
  );
};

export default SectionContainer;
