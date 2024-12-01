import React from "react";
import "./Typed.css";
import Typewriter from "typewriter-effect";

function Typed() {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: [
            "SQL Server Database Administrator",
            "Designing and Building Scalable Data Pipelines",
            "Passionate About Leveraging Cloud Solutions for Efficient Data Management",
        ],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
}

export default Typed;
