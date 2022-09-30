import React from "react";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Chip,
  styled,
} from "@mui/material";
import memory from "../images/memory.png";
import workout from "../images/workout.png";

const MediaOverlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  boxSizing: "border-box",
  background: theme.palette.secondary.light,
  color: "#fff",
  transition: "all 0.4s ease-in-out",
}));

const MyCard = () => {
  return (
    <>
      {/* <Card
        sx={{
          maxWidth: 345,
          alignItem: "center",
          textAlign: "center",
        }}
      >
        <CardMedia component="img" image={memory} alt="react" />
        <MediaOverlay component="div">
          <Typography variant="h6" sx={{ width: "50%" }}>
            memory
          </Typography>
        </MediaOverlay>
        <CardContent>
          <Chip label="React" />
          <Chip label="MongoDB" />
          <Chip label="Express" />
          <Chip label="Node JS" />
        </CardContent>
      </Card> */}
      <div className="container">
        <img className="img" src={memory} alt="react" />
        <div className="overlay">
          <div className="text">
            <h4>social media for user to create, share, search posts. </h4>
            <button>Visit Website </button>
            <button>View Codes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCard;
