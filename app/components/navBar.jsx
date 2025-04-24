import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import argentBankLogo from "../assets/img/argentBankLogo.png";

const NavBar = ({ onSignOut }) => {
  const { firstName, status, error } = useSelector((state) => state.user);
  console.log("User state in NavBar:", useSelector((state) => state.user));

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img src={argentBankLogo} alt="Argent Bank Logo" className="main-nav-logo-image" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="main-nav-items">
        {firstName ? (
          <>
            <Link to="/user" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {firstName}
            </Link>
            <a className="main-nav-item" onClick={onSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </a>
          </>
        ) : (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
};

export default NavBar;