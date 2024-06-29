import PropTypes from "prop-types";
import React, { useState } from "react";

const Button = (props) => {
  function later() {
    console.log("clicked");
  }
  return (
    <>
      <div className="background">
        <h1>Styling</h1>
        <img className="image" src="./office.jpg" alt="" />
        <br />
        <button className="button" onClick={later}>
          Click here
        </button>
        <p>Name: {props.name}</p>
        <h3>{props.title}</h3>
      </div>
    </>
  );
};

Button.PropTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Button;
