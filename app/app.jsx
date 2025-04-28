import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import AppRouter from "./routes/router.jsx";
import "./styles/css/main.css"; 


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Provider>
);