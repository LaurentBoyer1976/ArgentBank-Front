import React from "react";
import PropTypes from "prop-types";

/**
 * @description Composant affichant le nom de l'utilisateur et son prénom
 * @param {string} firstName - Le prénom de l'utilisateur
 * @param {string} name - Le nom de l'utilisateur
 * @returns {JSX.Element} - Le composant UserName
 */

const UserName = ({ firstName, name }) => {
  return (
    <div className="user-name">
      <div className="user-firstname">
        <h2>{firstName}</h2>
      </div>
      <div className="user-lastname">
        <h2>{name}!</h2>
      </div>
    </div>
  );
};

UserName.propTypes = {
  firstName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserName;
