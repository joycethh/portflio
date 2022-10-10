import React from "react";
import { Box } from "@mui/material";

const TabPanel = ({ value, index, children, ...other }) => {
  return (
    <div id={`${index}`} hidden={value !== index}>
      {value === index && <Box {...other}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
