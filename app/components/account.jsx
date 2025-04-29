import React from "react";
import PropTypes from "prop-types";
import AccountCard from "./accountCard";

/**
 * @description Composant Account qui affiche une liste de cartes de compte
 * @param {Object} accounts - Les datas à passer au composant
 * @param {Array} accounts.accounts - Les données des comptes à afficher
 * @returns {JSX.Element} - Le composant Account
 */

const Account = ({ accounts }) => {

  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((data) => (
        <AccountCard
          key={data._id} // Utilise `data.id` comme clé
          _id={data._id} // Passe `id` comme prop
          title={data.title}
          amount={data.amount}
          description={data.description}
        />
      ))}
    </>
  );
};

Account.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired, 
      title: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Account;