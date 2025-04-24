import React, { useState } from "react";
import PropTypes from "prop-types";
import EditUserNameModal from "./editUserNameModal";

const MainHeader = ({ user, onUpdateUser }) => {
    const [isEditing, setIsEditing] = useState(false); // Contrôle l'affichage de la modale

    const handleEditClick = () => {
        setIsEditing(true); // Affiche la modale
    };

    const handleCloseModal = () => {
        setIsEditing(false); // Ferme la modale
    };

    if (!user) {
        return <p>Loading user data...</p>; // Affiche un message de chargement si `user` est `undefined`
    }

    return (
        <header className="header">
            {isEditing ? (
                // Affiche la modale si `isEditing` est vrai
                <EditUserNameModal onClose={handleCloseModal} />
            ) : (
                <div>
                    <h1>
                        Welcome back<br />{user.firstName} {user.lastName}!
                    </h1>
                    <button className="edit-button" onClick={handleEditClick}>
                        Edit Name
                    </button>
                </div>
            )}
        </header>
    );
};

MainHeader.propTypes = {
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
    }),
    onUpdateUser: PropTypes.func.isRequired, // Fonction pour mettre à jour l'utilisateur
};

export default MainHeader;