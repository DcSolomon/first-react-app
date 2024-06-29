import PropTypes from "prop-types";
import UserUserName from "./UserUserName";

function UserProfile(props) {
  return (
    <div id="user-profile">
      <UserUserName username="Dc" />

      <b>Age: </b>
      <span>{props.age}</span>
      <br />
      <section>
        <span>Favourites Foods</span>
        <br />
        <ul>
          <li>Swallow</li>
          <li>Rice</li>
          <li>Beans</li>
        </ul>
      </section>
    </div>
  );
}

UserProfile.PropTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default UserProfile;
