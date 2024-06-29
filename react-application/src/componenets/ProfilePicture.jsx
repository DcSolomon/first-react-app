import React from "react";

const ProfilePicture = () => {
  const imageUrl = "../src/assets/pexels.jpeg";

  const handleClick = (e) => {
    e.target.style.display = "none";
  };

  return (
    <div>
      <img
        onClick={(e) => handleClick(e)}
        className="profile-image"
        src={imageUrl}
        alt="Profile picture"
      />
    </div>
  );
};

export default ProfilePicture;
