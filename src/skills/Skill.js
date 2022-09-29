import React from "react";
import {
  Container,
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const Skill = () => {
  return (
    <div id="skill">
      <Container>
        <Box>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Front-End
          </Typography>
          <Grid container justifyContent="center" alignItems="center">
            {front.map((item) => (
              <Grid item xs={6} sm={3} md={3} key={item.title}>
                <Card
                  elevation={1}
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
                      width: { xs: "45px", md: "75px", xl: "100px" },
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

          {/* backend */}
          <Typography variant="h6">Back-End</Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            {back.map((item) => (
              <Grid item xs={6} sm={4} md={4} lg={2} key={item.title}>
                <Card elevation={2} sx={{ textAlign: "center" }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{ width: "35px", height: "35px" }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* others */}
          <Typography variant="h6">Other</Typography>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            {others.map((item) => (
              <Grid item xs={6} sm={4} md={4} lg={2} key={item.title}>
                <Card elevation={2} sx={{ textAlign: "center" }}>
                  <img
                    src={item.src}
                    alt={item.title}
                    style={{ width: "35px", height: "35px" }}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" gutterBottom>
                      {item.title}
                    </Typography>
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

const front = [
  {
    title: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
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
];
const back = [
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
];
const others = [
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
