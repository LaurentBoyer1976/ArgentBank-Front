import React from "react";
import PropTypes from "prop-types";
import AccountCard from "./accountCard";

const Account = ({ accounts }) => {
  console.log("Accounts passed to AccountCard:", accounts);

  return (
    <>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((data) => (
        <AccountCard
          key={data.id}
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
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired, // Ou `PropTypes.number` selon le format
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Account;