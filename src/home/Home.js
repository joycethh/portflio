import React from "react";
import { Container, Grid, Typography, Paper, Box, Fab } from "@mui/material";
import {
  ImportantDevices,
  ArrowForward,
  Code,
  TipsAndUpdates,
} from "@mui/icons-material";
import { Link } from "react-scroll";

import { AvatarBox, BioBox, StyledButton } from "./Elements";

import Avatar from "../Avatar";

const Home = () => {
  return (
    <div id="home">
      <Container>
        <Box>
          <Grid container>
            <Grid item xs={12} md={3}>
              <AvatarBox>
                <Avatar />
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

          {/* features   */}
          <Box pt={6}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Skills Overview
            </Typography>
          </Box>
          <Box pt={12}>
            <Grid container columnSpacing={2} rowSpacing={{ sm: 4, md: 1 }}>
              {lists.map((item) => (
                <Grid
                  item
                  sm={12}
                  md={4}
                  key={item.title}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      alignItem: "center",
                      textAlign: "center",
                      padding: 3,
                      width: 350,
                      height: 220,
                    }}
                  >
                    <Fab
                      sx={{
                        backgroundColor: "#00ADB5",

                        width: "80px",
                        height: "80px",
                        top: "-40px",
                      }}
                    >
                      {
                        <item.icon
                          style={{ fontSize: "40px", color: "#FAF0E6" }}
                        />
                      }
                    </Fab>

                    <Typography gutterBottom variant="h6">
                      {item.title}
                    </Typography>
                    <Typography variant="body2">{item.body}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

const lists = [
  {
    icon: Code,
    title: "Web Development",
    body: "I am always aimed for responsive layouts communicative and creative designs and fast-loading web applications. ",
  },
  {
    icon: ImportantDevices,
    title: "Web Design",
    body: "A focus placed on the communication, interation and probelm-solving through thoughtful web designs.",
  },
  {
    icon: TipsAndUpdates,
    title: "Ability of Learning",
    body: "It is really important to keep in trend with rapid developing technologies. Strong preference on using the newest and reliable techonologies",
  },
];
export default Home;
