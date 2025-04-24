import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import UserName from "./userName";

const MainHeader = ({ onUpdateUser }) => {
  const user = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);

  console.log("User data in MainHeader:", user);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  if (!user.firstName || !user.name) {
    return <p>Loading user data...</p>;
  }

  return (
    <header className="header">
      <h1>Welcome back</h1>
      <UserName firstName={user.firstName} name={user.name} />
      <button className="edit-button" onClick={handleEditClick}>
        Edit Name
      </button>
    </header>
  );
};

MainHeader.propTypes = {
  onUpdateUser: PropTypes.func.isRequired,
};

export default MainHeader;