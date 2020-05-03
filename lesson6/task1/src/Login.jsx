import React from "react";

const Login = ({ onLogin }) => {
    return (
        <button className="btn" onClick={onLogin}>
            Login
        </button>
    );
};

export default Login;
