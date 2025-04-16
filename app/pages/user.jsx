import React from "react";
import PropTypes from "prop-types";
import Account from "../components/account";
import MainHeader from "../components/mainHeader";

const User = (data) => {
    const user = {
        firstName: data.firstName,
        lastName: data.lastName,
    };
console.log("user dans USER", user);

    return (
        <main className="main bg-dark">
            <MainHeader
                user={user} // Passe un objet `user` au composant MainHeader
                onUpdateUser={(updatedUser) => {
                    console.log("User updated:", updatedUser);
                }}
            />
            <Account
                title={data.title}
                amount={data.amount}
                description={data.description}
                id={data.id}
            />
        </main>
    );
};

User.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default User;
