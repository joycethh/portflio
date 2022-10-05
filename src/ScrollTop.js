import React from "react";
import { Fade, Box, useScrollTrigger } from "@mui/material";

const ScrollTop = ({ children }) => {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });

  const handleClick = (event) => {
    const anchor = event.target.ownerDocument.querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <>
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    </>
  );
};

export default ScrollTop;
