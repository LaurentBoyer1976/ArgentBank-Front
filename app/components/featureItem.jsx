import React from "react";
import PropTypes from "prop-types";

/**
 * @description Composant FeatureItem qui affiche les informations d'une fonctionnalité
 * @param {string} icon - L'icône de la fonctionnalité
 * @param {string} title - Le titre de la fonctionnalité
 * @param {string} description - La description de la fonctionnalité
 * @returns {JSX.Element} - Le composant FeatureItem 
 */

const FeatureItem = ({ icon, title, description }) => {

  const iconPath = icon ? `/app/assets/img/${icon}` : ""; // Vérifiez que `icon` n'est pas vide

  return (
    <div className="feature-item">
      {icon && (
        <img
          src={iconPath}
          alt={`Icon of ${title}`}
          className="feature-icon"
        />
      )}
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

FeatureItem.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureItem;