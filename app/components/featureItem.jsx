import React from "react";
import PropTypes from "prop-types";

const FeatureItem = ({ icon, title, description }) => {
  // Construisez le chemin complet pour les icônes
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