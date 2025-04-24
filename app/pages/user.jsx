import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainHeader from "../components/mainHeader";
import Account from "../components/account";
import { fetchUserAccounts } from "../store/accountSlice";
import { formatAccounts } from "../utils/formatData";

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const accounts = useSelector((state) => state.accounts);

  const [isEditing, setIsEditing] = useState(false); // État pour contrôler la modale

  console.log("User data from Redux:", user);
  console.log("Accounts data from Redux:", accounts);

  useEffect(() => {
    if (accounts.status === "idle") {
      console.log("Dispatching fetchUserAccounts...");
      dispatch(fetchUserAccounts());
    }
  }, [dispatch, accounts.status]);

  if (!user.firstName || !user.name) {
    console.log("Condition failed: Missing user data", {
      firstName: user.firstName,
      lastName: user.lastName,
    });
    return <p>Loading user data...</p>;
  }

  if (accounts.status === "loading") {
    console.log("Accounts are still loading...");
    return <p>Loading accounts...</p>;
  }

  if (accounts.status === "failed") {
    console.log("Failed to load accounts:", accounts.error);
    return <p>Error loading accounts: {accounts.error}</p>;
  }

  const formattedAccounts = formatAccounts(accounts.accounts);
  console.log("Formatted accounts:", formattedAccounts);

  return (
    <main className="main bg-dark">
      <MainHeader
        onUpdateUser={() => setIsEditing(true)} // Ouvre la modale
        isEditing={isEditing} // Passe l'état de la modale
        onCloseModal={() => setIsEditing(false)} // Ferme la modale
      />
      <Account accounts={formattedAccounts} />
    </main>
  );
};

export default User;
