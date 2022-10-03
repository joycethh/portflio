import React from "react";
import {
  Card,
  CardMedia,
  Button,
  Stack,
  CardContent,
  Typography,
  Chip,
  styled,
} from "@mui/material";
import memory from "../images/memory.png";
import workout from "../images/workout.png";

const OverlayBox = styled("div")(({ theme }) => ({
  color: "#ffffff",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: "100%",
  width: "100%",
  opacity: 0,
  backgroundColor: " rgba(37,42,52,1)",
  transition: "0.5s ease-in-out",
  "&:hover": {
    opacity: 1,
  },
}));

const StyledImg = styled(CardMedia)({
  display: "block",
  maxWidth: "100%",
  opacity: 1,
  transition: ".5s ease",
  backfaceVisibility: "hidden",
  "&:hover": {
    opacity: 0.1,
  },
});

const TextBox = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const MyCard = () => {
  return (
    <>
      <Card sx={{ position: "relative", width: "50%" }}>
        <StyledImg component="img" image={workout} alt="workout" />
        <CardContent>
          <Chip label="React" />
          <Chip label="MongoDB" />
          <Chip label="Express" />
          <Chip label="Node JS" />
        </CardContent>
        <OverlayBox component="div">
          <TextBox>
            <Typography variant="h6" pb={2}>
              Social media web app using CRUD mechanism that allows users to
              create, update and delete posts.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" size="small" color="secondary">
                Visit Website
              </Button>
              <Button variant="outlined" size="small" color="secondary">
                View Codes
              </Button>
            </Stack>
          </TextBox>
        </OverlayBox>
      </Card>
    </>
  );
};

export default MyCard;
