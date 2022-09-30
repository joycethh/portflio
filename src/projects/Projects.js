import React from "react";
import { Box, Tabs, Tab, Card } from "@mui/material";

import SectionContainer from "../SectionContainer";
import TabPanel from "./TabPanel";

const Projects = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="projects">
      <SectionContainer title="projects">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            variant="scrollable"
            value={value}
            onChange={handleChange}
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            <Tab label="Latest" />
            <Tab label="React.JS " />
            <Tab label="Node JS " />
            <Tab label="JavaScript" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Card>projects</Card>
        </TabPanel>
      </SectionContainer>
    </div>
  );
};

export default Projects;
