import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box pt={10}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#434e5e",
        }}
      >
        <Typography variant="body2" p={1.6}>
          Joyce Tang Ⓒ {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
