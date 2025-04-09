import React from "react";
import PropTypes from "prop-types";


const FeatureItem = (data) => {
    <div class="feature-item">
          <img
            src={data.icon}
            alt={`Icon of ${data.title}`}
            class="feature-icon"
          />
          <h3 class="feature-item-title">{data.title}</h3>
          <p>{data.description}</p>
        </div>

}
FeatureItem.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};


export default FeatureItem;