import React from "react";
import { Box, styled } from "@mui/material";
import avatar from "./images/avatar.jpg";

const StyledImg = styled("img")({
  width: 200,
  borderRadius: 10,
});
const Avatar = () => {
  return (
    <>
      <StyledImg src={avatar} alt="joyce tang" />
    </>
  );
};

export default Avatar;
