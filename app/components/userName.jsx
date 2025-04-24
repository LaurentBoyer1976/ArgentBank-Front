import React from "react";
import PropTypes from "prop-types";

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
