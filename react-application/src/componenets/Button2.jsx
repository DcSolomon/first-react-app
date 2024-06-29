import React from "react";

const Button2 = () => {
  function handleClick(e) {
    e.target.textContent = "OUCH!";
  }

  return (
    <div>
      <button onClick={(e) => handleClick(e)}>Click me</button>
    </div>
  );
};

export default Button2;
