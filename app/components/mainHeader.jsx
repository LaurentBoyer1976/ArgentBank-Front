import React, { useState } from "react";
import PropTypes from "prop-types";

const MainHeader = ({ user, onUpdateUser }) => {
    console.log("user", user); // Vérifiez si `user` est bien passé en prop
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState(user?.firstName || ""); // Utilisez `?.` pour éviter les erreurs
    const [lastName, setLastName] = useState(user?.lastName || "");

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            // Appelle la fonction passée en prop pour mettre à jour l'utilisateur
            await onUpdateUser({ firstName, lastName });
            setIsEditing(false);
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    if (!user) {
        return <p>Loading user data...</p>; // Affiche un message de chargement si `user` est `undefined`
    }

    return (
        <header className="header">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                    />
                    <button className="save-button" onClick={handleSaveClick}>
                        Save
                    </button>
                </div>
            ) : (
                <div>
                    <h1>
                        Welcome back<br />{firstName} {lastName}!
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