import React from "react";
import propTypes from "prop-types";

const MainHeader = (data) => {
    const [isEditing, setIsEditing] = React.useState(false);
    const [firstName, setFirstName] = React.useState(data.user.firstName);
    const [lastName, setLastName] = React.useState(data.user.lastName);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async () => {
        try {
            // Info: Replace with your API call to update the user in the database
            await fetch('/api/updateUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ firstName, lastName }),
            });
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    return (
        <header className="header">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <button className="save-button" onClick={handleSaveClick}>
                        Save
                    </button>
                </div>
            ) : (
                <div>
                    <h1>
                        Welcome back<br />{firstName} {lastName}!
                    </h1>
                    <button className="edit-button" onClick={handleEditClick}>
                        Edit Name
                    </button>
                </div>
            )}
        </header>
    );

}

MainHeader.propTypes = {
    user: propTypes.shape({
        firstName: propTypes.string.isRequired,
        lastName: propTypes.string.isRequired,
    }).isRequired,
};

export default MainHeader;