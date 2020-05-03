import React from "react";

const Logout = ({ onLogout }) => {
    return (
        <button className="btn" onClick={onLogout}>
            Logout
        </button>
    );
};

export default Logout;