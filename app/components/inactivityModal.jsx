import React from "react";
import PropTypes from "prop-types";

/**
 * @description Composant InactivityModal qui affiche une modal d'inactivité
 * @param {function} onStayConnected - Fonction appelée lorsque l'utilisateur choisit de rester connecté
 * @param {function} onSignOut - Fonction appelée lorsque l'utilisateur choisit de se déconnecter
 * @returns {JSX.Element} - Le composant InactivityModal
 */

const InactivityModal = ({ onStayConnected, onSignOut }) => {
  return (
    <div className="inactivity-modal">
      <div className="modal-content">
        <h2>Session inactive</h2>
        <p>Souhaitez-vous rester connecté ?</p>
        <button className="sign-in-button" onClick={onStayConnected}>
          Rester connecté
        </button>
        <button className="sign-in-button cancel-button" onClick={onSignOut}>
          Se déconnecter
        </button>
      </div>
    </div>
  );
};

InactivityModal.propTypes = {
  onStayConnected: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired,
};

export default InactivityModal;