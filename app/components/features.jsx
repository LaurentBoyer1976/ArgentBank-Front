import React from "react";
import PropTypes from "prop-types";
import FeatureItem from "./featureItem";

/** 
 * @description Composant Features qui affiche une liste de fonctionnalités
 * @param {Array} datas - Liste des données des fonctionnalités
 * @param {string} datas[].icon - L'icône de la fonctionnalité
 * @param {string} datas[].title - Le titre de la fonctionnalité
 * @param {string} datas[].description - La description de la fonctionnalité
 * @param {number} datas[].id - L'identifiant de la fonctionnalité
 * @returns {JSX.Element} - Le composant Features
 */

const Features = ({ datas }) => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {datas.map((data) => (
        <FeatureItem
          key={data.id}
          icon={data.icon}
          title={data.title}
          description={data.description}
        />
      ))}
    </section>
  );
};

Features.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Features;