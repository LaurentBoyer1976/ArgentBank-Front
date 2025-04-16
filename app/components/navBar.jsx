import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import argentBankLogo from "../assets/img/argentBankLogo.png";

const NavBar = ({ user, onSignOut }) => {
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
                {user ? (
                    <>
                        {/* Lien vers le profil de l'utilisateur */}
                        <Link to="/user" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            {user.firstName}
                        </Link>
                        {/* Bouton pour se déconnecter */}
                        <Link
                            className="main-nav-item"
                            onClick={onSignOut}
                        >
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </Link>
                    </>
                ) : (
                    // Lien pour se connecter si aucun utilisateur n'est connecté
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
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
    }),
    onSignOut: PropTypes.func.isRequired,
};

export default NavBar;