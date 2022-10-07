import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-scroll";

import { AvatarBox, BioBox, StyledButton } from "./Elements";

import Avatar from "../Avatar";

const Home = () => {
  return (
    <div id="home">
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
                <strong> front-end web developer</strong> focusing on creating
                <strong> beautiful </strong> web applications while wrting
                <strong> clean and maintainable </strong> codes.
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
                <StyledButton variant="outlined" endIcon={<ArrowForward />}>
                  View Projects
                </StyledButton>
              </Link>
            </BioBox>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
