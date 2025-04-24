import React from "react";
import PropTypes from "prop-types";
import AccountCard from "./accountCard";

const Account = ({ accounts }) => {
  console.log("Account component rendered with accounts:", accounts);
  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((data) => (
        <AccountCard
          key={data._id}
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
      amount: PropTypes.string.isRequired, // Ou `PropTypes.number` selon le format
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Account;