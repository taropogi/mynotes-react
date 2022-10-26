import React from "react";

const LoginForm = () => {
    const submitHandler = (event) => {
        event.preventDefault();
        alert("submitted");
    };

    return (
        <form onSubmit={submitHandler}>
            Username: <input type="text" />
            <br />
            Password: <input type="password" />
            <button type="submit" class="btn btn-primary">
                Submit
            </button>
        </form>
    );
};

export default LoginForm;
