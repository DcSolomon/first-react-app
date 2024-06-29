import React from "react";
import PropTypes from "react";

const Student = (props) => {
  return (
    <div className="student">
      Student Name: {props.name}
      <p>Student Age={props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
};
Student.PropTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Dc",
  age: 29,
  isStudent: true,
};

export default Student;
