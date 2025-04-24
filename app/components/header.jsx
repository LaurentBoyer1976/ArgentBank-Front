import React, { useState, useEffect } from "react";
import NavBar from "./navBar";

const Header = () => {
    const [user, setUser] = useState(null); // État pour stocker les informations de l'utilisateur

    useEffect(() => {
        // Simulez la récupération des données utilisateur (par exemple, depuis un token JWT ou une API)
        const token = localStorage.getItem("token");
        if (token) {
            // Exemple de données utilisateur récupérées
            const userData = { firstName: "Tony", lastName: "Stark" };
            setUser(userData);
        }
    }, []);

    const handleSignOut = () => {
        // Supprimez le token JWT du localStorage
        localStorage.removeItem("token");
        // Réinitialisez l'état utilisateur
        setUser(null);
        // Redirigez vers la page d'accueil ou de connexion
        window.location.href = "/";
    };

    return (
        <header className="header">
            <NavBar user={user} onSignOut={handleSignOut} />
        </header>
    );
};

export default Header;