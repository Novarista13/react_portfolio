import Typewriter from "typewriter-effect";
import React from "react";
import "../App.css";

function Text() {
  return (
    <Typewriter
      className="type-writer"
      options={{
        strings: ["React Js Developer", "UI Developer", "Front End Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Text;
