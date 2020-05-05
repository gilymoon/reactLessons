import React from "react";

const Login = ({ handleLogin }) => {
    return (
        <button className="login btn" onClick={handleLogin}>
            Login
        </button>
    );
};

export default Login;