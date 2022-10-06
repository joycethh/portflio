import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  styled,
} from "@mui/material";

import SectionContainer from "../SectionContainer";

const Box = styled("div")(({ theme }) => ({
  padding: theme.spacing(6),
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
}));

const Skill = () => {
  return (
    <div id="skills">
      <SectionContainer title="Skills">
        <Box component="div">
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            My Top Skills
          </Typography>
        </Box>
        <Box component="div">
          <Grid container>
            {front.map((item) => (
              <Grid item xs={6} sm={3} md={2} key={item.title}>
                <Card
                  elevation={0}
                  sx={{
                    alignItem: "center",
                    textAlign: "center",
                    paddingTop: "20px",
                    width: {
                      sx: 50,
                      sm: 80,
                      md: 120,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.src}
                    alt={item.title}
                    sx={{
                      width: { xs: "35px", md: "60px", xl: "80px" },
                      margin: "auto",
                    }}
                  />
                  <CardContent>
                    <Typography variant="body1" component="div" gutterBottom>
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </SectionContainer>
    </div>
  );
};

const front = [
  {
    title: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
  },
  {
    title: "Redux",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/redux.svg",
  },
  {
    title: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
  },
  {
    title: "Bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg",
  },
  {
    title: "Node JS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    title: "Express",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    title: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    title: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
  },
  {
    title: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
  },
  {
    title: "NPM",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  {
    title: "Heroku",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original-wordmark.svg",
  },
];

export default Skill;
