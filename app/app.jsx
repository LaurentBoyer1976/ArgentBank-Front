import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/router.jsx";
import "./styles/css/main.css"; 

console.log("React is rendering the application"); // Vérification

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
