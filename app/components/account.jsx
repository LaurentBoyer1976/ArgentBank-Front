import React from "react";
import propTypes from "prop-types";
import AccountCard from "./accountCard";


const Account = (datas) => {
    return (
        <>
            <h2 className="sr-only">Accounts</h2>
            {datas.map((data) => (
                <AccountCard
                    key={data.id}
                    title={data.title}
                    amount={data.amount}
                    description={data.description}          
                />
            ))}
        </>
    );
}