import React, { useState } from "react";
import "./about.css";

const AboutMe = () => {
  const inlineStyles = {
    btn: {
      backgroundColor: "#393646",
      padding: "1rem",
      color: "white",
      width: "190px",
      height: "60px",
    },
  };

  const [array, updateArray] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "Typescript",
    "React",
    "Angular",
    "GIT",
    "Github",
    "Nest Js",
    "MySQL",
    "SQL",
    "Responsive Design",
  ]);

  const skills = array.map((data) => (
    <div
      style={{ backgroundColor: "rgba(153,153,153,.2)", padding: "11px" }}
      className="flex-row  text-[#666] font-[500] skillClass"
    >
      {data}
    </div>
  ));

  return (
    <div id="about" className="aboutSection">
      <div className="aboutSubSection">
        <p className="aboutHeading">About Me</p>
        <p className="aboutSubHeading">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      <div className="md:flex pt-[100px] lg:pl-[170px] pl-[10px]">
        <div className="md:w-1/2 leading-8">
          <p className="lg:text-[25px] text-[20px] font-[700] lg:font-[720]">
            Get to know me!
          </p>
          <p className="md:w-[80%] pt-[20px] md:text-[18px] text-[#666]">
            I'm a <span className="font-[650]">Frontend Web Developer</span>{" "}
            building the Front-end of Websites and Web Applications that leads
            to the success of the overall product. Check out some of my work in
            the <span className="font-[650]">Projects</span> section.
          </p>
          <p className="md:w-[80%] pt-[20px] md:text-[18px] text-[#666]">
            I also like sharing content related to the stuff that I have learned
            over the years in{" "}
            <span className="font-[650]">Web Development</span> so it can help
            other people of the Dev Community. Feel free to Connect or Follow me
            on my Linkedin where I post useful content related to Web
            Development and Programming.
          </p>
          <p className="md:w-[80%] pt-[20px] md:text-[18px] text-[#666]">
            I'm open to <span className="font-[650]">Job </span> opportunities
            where I can contribute, learn and grow. If you have a good
            opportunity that matches my skills and experience then don't
            hesitate to <span className="font-[650]">contact</span> me.
          </p>
          <div className="pt-[30px]">
            <button className="inlineBtn" style={inlineStyles.btn}>
              CONTACT
            </button>
          </div>
        </div>
        <div className="md: w-1/2">
          <p className="lg:text-[25px] text-[20px] font-[700] lg:font-[720]">
            My Skills
          </p>

          <div
            className="pt-[20px] gap-4 flex-wrap w-[65%]"
            style={{ display: "flex" }}
          >
            {skills}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
