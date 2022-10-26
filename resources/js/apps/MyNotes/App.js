import React from "react";
import ReactDOM from "react-dom";

import "./App.css";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";

const App = () => {
    return (
        <div>
            <LoginForm />
            <RegisterForm />
        </div>
    );
};

export default App;
