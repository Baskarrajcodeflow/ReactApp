import React from "react";
import "./home.css";
import { Button } from "@mui/material";

const Home = () => {
  return (
    <div className="section1">
      <div className="homePage ">
        <p className="headingClass">HEY, I'M BASKAR RAJ</p>
        <p className="textClass md:w-[80%] lg:w-[35%]">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>

        <div className="bgBtn">
          <button className="btn">PROJECTS</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
