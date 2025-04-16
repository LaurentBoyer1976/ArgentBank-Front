import React from "react";
import PropTypes from "prop-types";
import FeatureItem from "./featureItem";

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