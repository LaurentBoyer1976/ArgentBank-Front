import React from "react";
import Account from "../components/account";
import MainHeader from "../components/mainHeader";

const User = (data) => {
    return (
        <main className="main bg-dark">
            <MainHeader
                firstName={data.firstName}
                lastName={data.lastName}
                id={data.id}
            />
            <Account
                title={data.title}
                amount={data.amount}
                description={data.description}
                id={data.id}
            />
           
        </main>
    );
}
User.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
export default User;
