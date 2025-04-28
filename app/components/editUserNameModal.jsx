import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserName } from "../api/services/userAuthentification";
import { fetchUserData } from "../store/userSlice";
import PropTypes from "prop-types";

/** 
 * @description Composant EditUserNameModal qui affiche un formulaire pour modifier le nom d'utilisateur
 * @param {Function} onClose - Fonction pour fermer la modale
 * @returns {JSX.Element} - Le composant EditUserNameModal
 */

const EditUserNameModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { firstName, name, token } = useSelector((state) => state.user);
  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(name);
  const [error, setError] = useState(null);

  useEffect(() => {
    setNewFirstName(firstName);
    setNewLastName(name);
  }, [firstName, name]);

  const handleUpdateUserName = async (e) => {
    e.preventDefault();
    try {
      await updateUserName(token, newFirstName, newLastName); // Appel API pour mettre à jour le nom d'utilisateur
      dispatch(fetchUserData()); // Récupérer les données utilisateur et les stocker dans le store
      onClose(); // Fermer la modale après la mise à jour
    } catch (err) {
      setError(err.message); // Gérer l'erreur si la mise à jour échoue
    }
  };

  return (
    <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Edit Name</h1>
      <form onSubmit={handleUpdateUserName}>
        <div className="input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={newFirstName}
            onChange={(e) => setNewFirstName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={newLastName}
            onChange={(e) => setNewLastName(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="sign-in-button save-button">Save</button>
        <button type="button" className="sign-in-button cancel-button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </section>
  );
};

EditUserNameModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default EditUserNameModal;
