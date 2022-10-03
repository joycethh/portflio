import React from "react";
import { Box, Tabs, Tab, Grid } from "@mui/material";

import SectionContainer from "../SectionContainer";
import TabPanel from "./TabPanel";
import MyCard from "./Card";
import projectData from "./ProjectsData";

const Projects = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="projects">
      <SectionContainer title="projects">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tabs variant="scrollable" value={value} onChange={handleChange}>
            <Tab label="All" />
            <Tab label="React.JS " />
            <Tab label="Node JS " />
            <Tab label="JavaScript" />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
            {projectData.map((item, i) => (
              <Grid item sm={12} md={6} lg={4} key={i}>
                <MyCard
                  image={item.image}
                  alt={item.title}
                  label={item.label}
                  description={item.description}
                  siteLink={item.siteLink}
                  codeLink={item.codeLink}
                />
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
            {projectData.map((item, i) => (
              <Grid item sm={12} md={6} lg={4} key={i}>
                <MyCard
                  image={item.image}
                  alt={item.title}
                  label={item.label}
                  description={item.description}
                  siteLink={item.siteLink}
                  codeLink={item.codeLink}
                />
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </SectionContainer>
    </div>
  );
};

export default Projects;
