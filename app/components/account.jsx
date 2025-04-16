import React, { useState, useEffect } from "react";
import AccountCard from "./accountCard";
import { fetchAccounts } from "../api/services/api";

const Account = () => {
  const [accounts, setAccounts] = useState([]); // État pour stocker les comptes
  const [error, setError] = useState(""); // État pour gérer les erreurs

  useEffect(() => {
    const getAccounts = async () => {
      try {
        const response = await fetchAccounts(); // Récupère les comptes via l'API
        setAccounts(response.body); // Stocke les comptes dans l'état
      } catch (err) {
        setError("Failed to load accounts. Please try again later.");
      }
    };

    getAccounts();
  }, []);

  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {error && <p className="error-message">{error}</p>}
      {accounts.map((data) => (
        <AccountCard
          key={data._id} // Utilisez `_id` comme clé unique
          title={data.title}
          amount={data.amount}
          description={data.description}
        />
      ))}
    </>
  );
};

export default Account;