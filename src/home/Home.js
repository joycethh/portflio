import React from "react";
import {
  Container,
  Grid,
  Button,
  Typography,
  styled,
  Card,
  CardContent,
  Fab,
} from "@mui/material";
import {
  DevicesOutlined,
  EmojiObjectsOutlined,
  SpeedOutlined,
  LockOutlined,
} from "@mui/icons-material";

const Box = styled("div")(({ theme }) => ({
  padding: theme.spacing(6),
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
}));
const Home = () => {
  return (
    <div id="home">
      <Container>
        {/* decription */}
        <Box component="div">
          <Typography variant="body1" sx={{ width: "80%" }}>
            Hi, I am Joyce Tang, a self-started
            <strong> front-end web developer</strong> focusing on creating
            <strong> beautiful </strong> web applications while wrting{" "}
            <strong> clean and maintainable </strong> codes.
          </Typography>
        </Box>
        {/* features   */}
        <Box component="div">
          <Grid container spacing={0}>
            {lists.map((item) => (
              <Grid item xs={12} sm={6} md={3} xl={3} key={item.title}>
                <Card
                  elevation={0}
                  sx={{
                    textAlign: "center",
                    paddingTop: "20px",
                    width: "310px",
                  }}
                >
                  {/* icon section */}
                  <Fab
                    sx={{
                      backgroundColor: "#00ADB5",
                      width: "80px",
                      height: "80px",
                    }}
                  >
                    {<item.icon style={{ fontSize: "40px" }} />}
                  </Fab>

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
    body: "Always put the data security in mind",
  },
];
export default Home;
