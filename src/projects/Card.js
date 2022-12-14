import React from "react";
import {
  Card,
  CardMedia,
  Button,
  Stack,
  Box,
  Typography,
  Chip,
  styled,
} from "@mui/material";

const OverlayBox = styled("div")(({ theme }) => ({
  color: theme.palette.common.white,
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  height: "100%",
  width: "100%",
  opacity: 0,
  backgroundColor: "rgba(37,42,52,1)",
  transition: "0.5s ease-in-out",
  "&:hover": {
    opacity: 1,
  },
}));

const StyledImg = styled(CardMedia)({
  display: "block",
  opacity: 1,
  transition: ".5s ease",
  backfaceVisibility: "hidden",
  "&:hover": {
    opacity: 0.1,
  },
});

const TextBox = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));

const StyledChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  backgroundColor: "#68717e",
  color: "#ffffff",
  display: "inline-block",
  fontSize: "11px",
  height: "85%",
  fontWeight: "700",
}));

const MyCard = ({
  image,
  alt,
  label,
  description,
  siteLink,
  codeLink,
  title,
}) => {
  return (
    <>
      <Card
        sx={{
          backgroundColor: "#eeeeee",
          position: "relative",
          width: { xs: 400, sm: "auto" },
        }}
      >
        <StyledImg component="img" image={image} alt={alt} />

        {/* card footer */}
        <Box
          sx={{
            paddingTop: 2,
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6">{title}</Typography>
          </Box>

          <Box
            sx={{
              textAlign: "center",
              pb: 1,
            }}
          >
            {label.map((value) => (
              <StyledChip label={value} key={value} />
            ))}
          </Box>
        </Box>

        {/* overlay box */}
        <OverlayBox component="div">
          <TextBox>
            <Typography variant="body1" pb={2}>
              {description}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                size="small"
                color="secondary"
                href={siteLink}
                target="_blank"
              >
                Visit Website
              </Button>
              <Button
                variant="outlined"
                size="small"
                color="secondary"
                href={codeLink}
                target="_blank"
              >
                View Code
              </Button>
            </Stack>
          </TextBox>
        </OverlayBox>
      </Card>
    </>
  );
};

export default MyCard;
