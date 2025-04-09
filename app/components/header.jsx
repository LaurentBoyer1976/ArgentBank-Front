import React from "react";
import PropTypes from "prop-types";
import NavBar from "./navBar";


const Header = () => {
    return (
        <header className="header">
            <NavBar />
        </header>
    );
}

Header.propTypes = {
    logo: PropTypes.string,
    altText: PropTypes.string,
};

export default Header;