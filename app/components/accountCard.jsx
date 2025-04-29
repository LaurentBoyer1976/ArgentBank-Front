import React from "react";
import PropTypes from "prop-types";

/**
 * @description Composant AccountCard qui affiche les informations d'un compte
 * @param {title: string, amount: string, description: string} props - Les props du composant
 * @returns {JSX.Element} le composant AccountCard
 */

const AccountCard = ({ _id, title, amount, description}) => {

  return (
    <section className="account" key={_id}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p> {/* Affiche directement la chaîne ou le nombre */}
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

AccountCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AccountCard;