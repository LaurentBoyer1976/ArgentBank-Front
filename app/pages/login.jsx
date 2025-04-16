import React from "react";
import LoginModal from "../components/loginModal";

console.log("Login page loaded"); // Debugging line to check if the page is loaded

const Login = () => {
    return (
        <main className="main bg-dark">
            <LoginModal />
        </main>
    );
}

export default Login;