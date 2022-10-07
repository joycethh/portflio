import React from "react";
import avatar from "./images/avatar.jpg";

const Avatar = ({ square }) => {
  return (
    <>
      <img
        src={avatar}
        alt="joyce tang"
        style={{
          width: square ? 200 : 95,
          height: square ? "auto" : 95,
          borderRadius: square ? 10 : 50,
        }}
      />
    </>
  );
};

export default Avatar;
