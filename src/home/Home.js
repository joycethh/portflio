import React from "react";
import {
  Container,
  Grid,
  CardMedia,
  Typography,
  Paper,
  Box,
  CardContent,
  Fab,
} from "@mui/material";
import {
  DevicesOutlined,
  EmojiObjectsOutlined,
  SpeedOutlined,
  ArrowForward,
} from "@mui/icons-material";
import { Link } from "react-scroll";

import { AvatarBox, BioBox, StyledButton } from "./Elements";

import Avatar from "../Avatar";

const Home = () => {
  return (
    <div id="home">
      <Container>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
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
              Codeing Overview
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
                    {/* icon section */}
                    <Fab
                      sx={{
                        backgroundColor: "#00ADB5",
                        width: "80px",
                        height: "80px",
                        top: "-40px",
                      }}
                    >
                      {<item.icon style={{ fontSize: "40px" }} />}
                    </Fab>

                    {/* content section */}

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
    icon: DevicesOutlined,
    title: "Responsive",
    body: "A focus placed on the layouts for any screens",
  },
  {
    icon: EmojiObjectsOutlined,
    title: "Creative",
    body: "Preference for interative and communicative designs",
  },
  {
    icon: SpeedOutlined,
    title: "Fast",
    body: "Aimed for making light-weight, fast-loading applications",
  },
];
export default Home;
