import React from "react";
import { Container, Divider, Chip } from "@mui/material";

const SectionContainer = ({ title, children }) => {
  return (
    <>
      <Container>
        <div>
          <Divider color="primary">
            <Chip label={title} size="large" color="primary" />
          </Divider>
        </div>
        <div>{children}</div>
      </Container>
    </>
  );
};

export default SectionContainer;
