import React from "react";
import PropTypes from "prop-types";

const AccountCard = ({ title, amount, description }) => {
  console.log("AccountCard props:", { title, amount, description });

  return (
    <section className="account">
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
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired, // Ou `PropTypes.number` selon le format
  description: PropTypes.string.isRequired,
};

export default AccountCard;