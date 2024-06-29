import React from "react";
import PropTypes from "react";

const UserGreeting = (props) => {
  const welcomeMessage = (
    <h2 className="welcome-message">Welcome {props.username}</h2>
  );
  const loginPropt = <h2 className="login-propt">Please login to continue</h2>;

  return props.isLoggedIn ? welcomeMessage : loginPropt;
};

UserGreeting.PropTypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};

UserGreeting.defaultProps = {
  username: "DC",
  isLoggedIn: false,
};

export default UserGreeting;
