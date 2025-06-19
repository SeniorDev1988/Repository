// App.js
import React, { useState } from "react";
import { User } from "./models/user";
import { validate, validationEnum } from "./utils/validation";
import "./assets/styles/CreateAccount.css";

const ErrorMessage = ({ value }) => {
  switch (value) {
    case "email":
      return <p className="FieldError">Email is not valid</p>;
    case "password":
      return (
        <p className="FieldError">
          Password should have at least 8 characters with uppercase, lowercase,
          number, and special character
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

function CreateAccount() {
  const [user, setUser] = useState(new User());

  const handleChange = (fieldName, value) => {
    let isSuccess = false;

    switch (fieldName) {
      case "firstName":
      case "lastName":
        isSuccess = validate(validationEnum.TEXT, value, 3, 15);
        break;
      case "email":
        isSuccess = validate(validationEnum.EMAIL, value);
        break;
      case "password":
        isSuccess = validate(validationEnum.PASSWORD, value);
        break;
      default:
        isSuccess = value.length > 0;
    }

    const updatedUser = new User();
    Object.assign(updatedUser, user); // clone current state
    updatedUser.updateField(fieldName, value, isSuccess);

    setUser(updatedUser);
  };

  const handleBlur = (fieldName) => {
    const updatedUser = new User();
    Object.assign(updatedUser, user);
    if (updatedUser[fieldName]) {
      updatedUser[fieldName].isTouched = true;
      setUser(updatedUser);
    }
  };

  const handleRoleChange = (role) => {
    const updatedUser = new User();
    Object.assign(updatedUser, user);
    updatedUser.role = role;
    setUser(updatedUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.isValid) {
      alert("Account created!");
      setUser(new User());
    } else {
      alert("Please fix validation errors.");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>

          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              type="text"
              value={user.firstName.value}
              onChange={(e) => handleChange("firstName", e.target.value)}
              onBlur={() => handleBlur("firstName")}
              placeholder="First name"
            />
            {user.firstName.isTouched && !user.firstName.isSuccess && (
              <ErrorMessage value="firstname" />
            )}
          </div>

          <div className="Field">
            <label>Last name</label>
            <input
              type="text"
              value={user.lastName.value}
              onChange={(e) => handleChange("lastName", e.target.value)}
              onBlur={() => handleBlur("lastName")}
              placeholder="Last name"
            />
            {user.lastName.isTouched && !user.lastName.isSuccess && (
              <ErrorMessage value="lastname" />
            )}
          </div>

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

          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={user.role} onChange={(e) => handleRoleChange(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>

          <button type="submit" disabled={!user.isValid}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default CreateAccount;
