import React from "react";
import { Grid } from "@mui/material";
import MyCard from "./Card";
import projectData from "./ProjectsData";

const GalleryGrid = ({ filter }) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {projectData
          .map((element) => {
            return {
              ...element,
              labels: element.label.filter((label) => label === filter),
            };
          })
          .filter((elem) => elem.labels.length > 0)
          .map((item, i) => (
            <Grid item sm={12} md={6} key={i}>
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
    </>
  );
};

export default GalleryGrid;
