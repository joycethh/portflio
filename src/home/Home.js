import React from "react";
import {
  Container,
  Grid,
  CardMedia,
  Typography,
  Card,
  Box,
  CardContent,
} from "@mui/material";
import {
  DevicesOutlined,
  EmojiObjectsOutlined,
  SpeedOutlined,
  LockOutlined,
  ArrowForward,
  ArrowDownwardOutlined,
} from "@mui/icons-material";
import { Link } from "react-scroll";

import { AvatarBox, BioBox, StyledButton } from "./Elements";

import Avatar from "../Avatar";

const Home = () => {
  return (
    <div id="home">
      <Container>
        <Grid container sx={{ backgroundColor: "skyblue" }}>
          <Grid item xs={12} md={4}>
            <AvatarBox>
              <Avatar />
            </AvatarBox>
          </Grid>

          <Grid item xs={12} md={8} sx={{ backgroundColor: "pink" }}>
            <BioBox>
              <Typography variant="body1">Hello, my name is</Typography>
            </BioBox>
            <BioBox>
              <Typography variant="h4">Joyce Tang</Typography>
            </BioBox>
            <BioBox>
              <Typography variant="body1">
                I am a self-started
                <strong> front-end web developer</strong> focusing on creating
                <strong> beautiful </strong> web applications while wrting
                <strong> clean and maintainable </strong> codes.
              </Typography>
            </BioBox>
            <BioBox>
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
        <Box component="div">
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            I am aming for these goals
          </Typography>
        </Box>
        <Box component="div">
          <Grid container>
            {lists.map((item) => (
              <Grid item xs={12} sm={6} md={3} xl={3} key={item.title}>
                <Card
                  elevation={0}
                  sx={{
                    alignItem: "center",
                    textAlign: "center",
                    paddingTop: "20px",
                    width: {
                      sx: 70,
                      sm: 100,
                      md: 150,
                    },
                  }}
                >
                  <CardMedia>
                    {
                      <item.icon
                        alt={item.title}
                        sx={{
                          fontSize: { xs: "25px", md: "45px", xl: "65px" },
                          margin: "auto",
                        }}
                      />
                    }
                  </CardMedia>

                  {/* icon section */}
                  {/* <Fab
                    sx={{
                      backgroundColor: "#00ADB5",
                      width: "80px",
                      height: "80px",
                    }}
                  >
                    {<item.icon style={{ fontSize: "40px" }} />}
                  </Fab> */}

                  {/* content section */}
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body2">{item.body}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
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
  {
    icon: LockOutlined,
    title: "Secure",
    body: "Always put the data sercurity in mind",
  },
];
export default Home;
