import React from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../store/userSlice";
import NavBar from "./navBar";

const Header = () => {
    const dispatch = useDispatch();

    const handleSignOut = () => {
        // Supprimez le token JWT du localStorage
        localStorage.removeItem("token");
        // Réinitialisez l'état utilisateur dans Redux
        dispatch(clearUser());
        // Redirigez vers la page d'accueil ou de connexion
        window.location.href = "/";
    };

    return (
        <header className="header">
            <NavBar onSignOut={handleSignOut} />
        </header>
    );
};

export default Header;