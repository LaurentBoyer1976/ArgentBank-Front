import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import UserName from "./userName";
import EditUserNameModal from "./editUserNameModal"; 

/**
 * @description Composant MainHeader qui affiche l'en-tête secondaire de l'application dans la balise main.
 * @param {function} onUpdateUser - Fonction appelée pour mettre à jour l'utilisateur
 * @param {boolean} isEditing - Indique si l'utilisateur est en mode édition
 * @param {function} onCloseModal - Fonction appelée pour fermer la modale
 * @returns {JSX.Element} - Le composant MainHeader
 */

const MainHeader = ({ onUpdateUser, isEditing, onCloseModal }) => {
  const user = useSelector((state) => state.user);


  if (!user.firstName || !user.name) {
    return <p>Loading user data...</p>;
  }

  return (
    <header className="header">
      {isEditing ? (
        <EditUserNameModal onClose={onCloseModal} /> // Info: Affiche la modale si `isEditing` est vrai
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
  isEditing: PropTypes.bool.isRequired, 
  onCloseModal: PropTypes.func.isRequired, 
};

export default MainHeader;