import React from "react";
import { Box, Button } from "@mui/material";

import { GitHub, LinkedIn, Email } from "@mui/icons-material/";
const Socials = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#fdfdfd",
        }}
      >
        <Button
          href="https://github.com/joycethh"
          target="_blank"
          sx={{ color: "#171515" }}
        >
          <GitHub sx={{ fontSize: { xs: 25, md: 35 } }} />
        </Button>
        <Button
          href="https://www.linkedin.com/in/joycethh/"
          target="_blank"
          sx={{ color: "#007bb5" }}
        >
          <LinkedIn sx={{ fontSize: { xs: 25, md: 35 } }} />
        </Button>
        <Button
          href="mailto: joycethhh@gmail.com"
          target="_blank"
          sx={{ color: "#dd4b39" }}
        >
          <Email sx={{ fontSize: { xs: 25, md: 35 } }} />
        </Button>
      </Box>
    </div>
  );
};

export default Socials;
