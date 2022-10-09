import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-scroll";

import { AvatarBox, BioBox, StyledButton, StyledSpan } from "./Elements";

import Avatar from "../Avatar";

const Home = () => {
  return (
    <div id="about">
      <Box sx={{ backgroundColor: "primary.main", p: 6 }}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={3}>
              <AvatarBox>
                <Avatar square={true} />
              </AvatarBox>
            </Grid>

            <Grid item xs={12} md={9}>
              <BioBox mt={2}>
                <Typography variant="body1">Hello, my name is</Typography>
              </BioBox>
              <BioBox mt={1}>
                <Typography variant="h3">Joyce Tang</Typography>
              </BioBox>
              <BioBox mt={2}>
                <Typography variant="body1">
                  I am a self-started
                  <StyledSpan> front-end web developer</StyledSpan> focusing on
                  creating
                  <StyledSpan> beautiful </StyledSpan> web applications while
                  wrting
                  <StyledSpan> clean and maintainable </StyledSpan> codes.
                </Typography>
              </BioBox>
              <BioBox mt={5}>
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  <StyledButton
                    variant="contained"
                    size="md"
                    sx={{ backgroundColor: "#667490", color: "#fcfcfc" }}
                    endIcon={<ArrowForward />}
                  >
                    View Projects
                  </StyledButton>
                </Link>
              </BioBox>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
