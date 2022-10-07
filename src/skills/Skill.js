import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  styled,
  Paper,
  Fab,
} from "@mui/material";
import { ImportantDevices, Code, TipsAndUpdates } from "@mui/icons-material";
import SectionContainer from "../SectionContainer";

const TitleBox = styled("div")(({ theme }) => ({
  padding: theme.spacing(6),
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
}));

const Skill = () => {
  return (
    <div id="skills">
      <SectionContainer title="Skills">
        {/* overview   */}
        <TitleBox component="div">
          <Typography variant="h5">Skills Overview</Typography>
        </TitleBox>
        <Grid
          container
          spacing={{ xs: 5, md: 2 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 12,
            pb: 3,
          }}
        >
          {lists.map((item) => (
            <Grid
              item
              sm={12}
              md={4}
              key={item.title}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Paper
                elevation={1}
                sx={{
                  alignItem: "center",
                  textAlign: "center",
                  padding: 3,
                  width: { xs: 350, md: 300, lg: 350 },
                  height: { xs: 220, md: 270, lg: 220 },
                }}
              >
                <Fab
                  sx={{
                    backgroundColor: "#00ADB5",
                    width: "80px",
                    height: "80px",
                    top: "-60px",
                  }}
                >
                  {<item.icon style={{ fontSize: "40px", color: "#FAF0E6" }} />}
                </Fab>

                <Typography gutterBottom variant="h6">
                  {item.title}
                </Typography>
                <Typography variant="body2">{item.body}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* lists */}
        <TitleBox component="div">
          <Typography variant="h5">My Top Skills</Typography>
        </TitleBox>
        <Grid container pt={12} pb={3}>
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
      </SectionContainer>
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
