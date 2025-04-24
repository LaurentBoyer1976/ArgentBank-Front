import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import UserName from "./userName";
import EditUserNameModal from "./editUserNameModal"; // Import de la modale

const MainHeader = ({ onUpdateUser, isEditing, onCloseModal }) => {
  const user = useSelector((state) => state.user);

  console.log("User data in MainHeader:", user);

  if (!user.firstName || !user.name) {
    return <p>Loading user data...</p>;
  }

  return (
    <header className="header">
      {isEditing ? (
        <EditUserNameModal onClose={onCloseModal} /> // Affiche la modale si `isEditing` est vrai
      ) : (
        <>
          <h1>Welcome back</h1>
          <UserName firstName={user.firstName} name={user.name} />
          <button className="edit-button" onClick={onUpdateUser}>
            Edit Name
          </button>
        </>
      )}
    </header>
  );
};

MainHeader.propTypes = {
  onUpdateUser: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired, // Ajout de la prop `isEditing`
  onCloseModal: PropTypes.func.isRequired, // Ajout de la prop pour fermer la modale
};

export default MainHeader;