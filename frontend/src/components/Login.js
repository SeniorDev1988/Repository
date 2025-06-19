import React, { useState } from "react";
import { UserLogin } from "../models/UserLogin"
import { validate, validationEnum } from "../utils/validation";
import "../assets/styles/Login.css";
import axios from 'axios';

const ErrorMessage = ({ value }) => {
    switch (value) {
        case "email":
            return <p className="FieldError">Email is empty</p>;
        case "password":
            return (
                <p className="FieldError">
                    Password is empty
                </p>
            );
        case "firstname":
            return (
                <p className="FieldError">
                    Firstname is not valid (Between 3 and 15 characters)
                </p>
            );
        case "lastname":
            return (
                <p className="FieldError">
                    Lastname is not valid (Between 3 and 15 characters)
                </p>
            );
        default:
            return null;
    }
};

function Login({ onLoginResult = () => { } }) {
    const [user, setUser] = useState(new UserLogin());

    const handleChange = (fieldName, value) => {
        let isSuccess;

        isSuccess = validate(validationEnum.CHECKNULL, value);
        const updatedUser = new UserLogin();
        Object.assign(updatedUser, user); // clone current state
        updatedUser.updateField(fieldName, value, isSuccess);
        setUser(updatedUser);
    };

    const handleBlur = (fieldName) => {
        const updatedUser = new UserLogin();
        Object.assign(updatedUser, user);
        if (updatedUser[fieldName]) {
            updatedUser[fieldName].isTouched = true;
            setUser(updatedUser);
        }
    };


    const handleSubmit = (e) => {

        e.preventDefault();
        if (user.isValid) {

            setUser(new UserLogin());
            // Call the API to login
            axios.post('http://localhost:5235/api/Login/', user.toJSON())
                .then((response) => {
                    debugger
                    const validUser = {
                        user: user,
                        token: response.data.token
                    }
                    onLoginResult(validUser);
                    // Handle successful login here
                })
                .catch((error) => {
                    debugger
                    document.getElementById('errorMessage').textContent = error.response?.statusText || "There was an error logging in!";
                    console.error("There was an error logging in!", error);
                });
        } else {
            alert("Please fix validation errors.");
        }
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Login</h2>
                    <p id='errorMessage' style={{ color: "red" }} />
                    <div className="Field">
                        <label>
                            Email address <sup>*</sup>
                        </label>
                        <input
                            type="email"
                            value={user.email.value}
                            onChange={(e) => handleChange("email", e.target.value)}
                            onBlur={() => handleBlur("email")}
                            placeholder="Email address"
                        />
                        {user.email.isTouched && !user.email.isSuccess && (
                            <ErrorMessage value="email" />
                        )}
                    </div>

                    <div className="Field">
                        <label>
                            Password <sup>*</sup>
                        </label>
                        <input
                            type="password"
                            value={user.password.value}
                            onChange={(e) => handleChange("password", e.target.value)}
                            onBlur={() => handleBlur("password")}
                            placeholder="Password"
                        />
                        {user.password.isTouched && !user.password.isSuccess && (
                            <ErrorMessage value="password" />
                        )}
                    </div>

                    <button type="submit" disabled={!user.isValid}>
                        Login
                    </button>
                </fieldset>
            </form>
        </div>
    );
}

export default Login;
