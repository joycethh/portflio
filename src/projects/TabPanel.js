import React from "react";
import { Box } from "@mui/material";

const TabPanel = ({ value, index, children }) => {
  return (
    <div id={`${index}`} hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

export default TabPanel;
