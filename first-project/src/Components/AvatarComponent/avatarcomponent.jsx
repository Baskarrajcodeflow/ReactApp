import React from "react";
import { Avatar } from "@mui/material";
import "./avatar.css";
import picture from "../../Assets/photo.jpg";

const AvatarComponent = () => {
  return (
    <div className="avatar">
      <Avatar
        src={picture}
        sx={{ backgroundColor: "purple", height: "45px", width: "45px" }}
      ></Avatar>
      <div className="avatarName">
        <p>BASKAR RAJ</p>
      </div>
    </div>
  );
};

export default AvatarComponent;
