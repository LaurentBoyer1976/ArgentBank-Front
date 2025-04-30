import React, { useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainHeader from "../components/mainHeader";
import Account from "../components/account";
import { fetchUserAccounts } from "../store/accountSlice";
import { formatAccounts } from "../utils/formatData";
import { openEditModal, closeEditModal, clearUser } from "../store/userSlice";
import InactivityModal from "../components/inactivityModal";


/**
 * @description Composant User qui affiche les informations de l'utilisateur et ses comptes
* @returns {JSX.Element} - Le composant User
 */

const User = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const accounts = useSelector((state) => state.accounts);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const inactivityTimer = useRef(null); //Note:  Utilisation de useRef pour le timer

  /**
   * @description Fonction pour réinitialiser le timer d'inactivité
   * @returns {void}
   */

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current);
    }
    inactivityTimer.current = setTimeout(() => {
      setIsModalVisible(true);
    }, 30000); //Note: 5 minutes d'inactivité
  }, []);

  useEffect(() => {
    if (accounts.status === "idle") {
      dispatch(fetchUserAccounts());
    }

    // Info: Ajoute des écouteurs pour détecter l'activité
    const events = ["mousemove", "keydown", "click"];
    events.forEach((event) =>
      window.addEventListener(event, resetInactivityTimer)
    );

    //Info: Initialiser le timer
    resetInactivityTimer();

    return () => {
      // Note: Nettoie les écouteurs et le timer
      events.forEach((event) =>
        window.removeEventListener(event, resetInactivityTimer)
      );
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
    };
  }, [dispatch, accounts.status, resetInactivityTimer]);

  const handleSignOut = () => {
    dispatch(clearUser());
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleStayConnected = () => {
    setIsModalVisible(false);
    resetInactivityTimer();
  };

  if (!user.firstName || !user.name) {
    return <p>Loading user data...</p>;
  }

  if (accounts.status === "loading") {
    return <p>Loading accounts...</p>;
  }

  if (accounts.status === "failed") {
    return <p>Error loading accounts: {accounts.error}</p>;
  }

  const formattedAccounts = formatAccounts(accounts.accounts);

  return (
    <main className="main bg-dark">
      {isModalVisible ? (
        <InactivityModal
          onStayConnected={handleStayConnected}
          onSignOut={handleSignOut}
        />
      ) : (
        <>
          <MainHeader
            onUpdateUser={() => dispatch(openEditModal())}
            isEditing={user.isEditing}
            onCloseModal={() => dispatch(closeEditModal())}
          />
          <Account accounts={formattedAccounts} />
        </>
      )}
    </main>
  );
};

export default User;
