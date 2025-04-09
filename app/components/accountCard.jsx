import React from "react";
import propTypes from "prop-types";

const AccountCard = (data) => {
    return (
        <section class="account">
        <div class="account-content-wrapper">
          <h3 class="account-title">{data.title}</h3>
          <p class="account-amount">{data.amount}</p>
          <p class="account-amount-description">{data.description}</p>
        </div>
        <div class="account-content-wrapper cta">
          <button class="transaction-button">View transactions</button>
        </div>
      </section>
    );
}
accountCard.propTypes = {
    title: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
};
export default AccountCard;