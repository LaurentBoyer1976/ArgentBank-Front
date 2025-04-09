import React from "react";
import PropTypes from "prop-types";

const Footer = () => {
    return (
        <footer className="footer">            
            <p className="footer-text">Copyright 2020 Argent Bank</p>                        
        </footer>
    );
}


Footer.propTypes = {
    text: PropTypes.string,
};

export default Footer;
