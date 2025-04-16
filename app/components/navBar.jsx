import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import argentBankLogo from "../../public/designs/img/argentBankLogo.png";

const NavBar = () => {
    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img
                    src={argentBankLogo}
                    alt="Argent Bank Logo"
                    className="main-nav-logo-image"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div className="main-nav-items">
                <Link to="/login" className="main-nav-item">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </Link>
            </div>
        </nav>
    );
}

NavBar.propTypes = {
    logo: PropTypes.string,
    altText: PropTypes.string,
};
export default NavBar;