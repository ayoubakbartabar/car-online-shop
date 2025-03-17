import React, { useEffect, useState } from "react";
import "./SignUpPage.css";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

export default function SignUpPage() {
  // set Hook
  const [user, setUser] = useState([]);
  // set Hook for inputs
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [checkBox, setCheckBox] = useState(false);
  // create function for addUserHandler
  const addUserHandler = () => {
    // create object
    const userObject = {
      id: user.length + 1,
      firstName: firstNameInput,
      lastName: lastNameInput,
      email: emailInput,
      password: passwordInput,
      agree: checkBox,
    };
    // set if problem
    if (
      firstNameInput &&
      lastNameInput &&
      emailInput &&
      passwordInput &&
      checkBox
    ) {
      // set object
      setUser((prevState) => {
        return [...prevState, userObject];
      });
    // fetching data
    fetch("https://car-online-shop-users-default-rtdb.firebaseio.com/users.json",{
      method:"POST",
      body:JSON.stringify(user)
    }).then(res=>console.log(res))
    
    }
    // empty the inputs
    setFirstNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setPasswordInput("");
    setCheckBox(false);
  };
  return (
    <section className="signup-page-container">
      <div className="signup-page-background-image">
        <img
          src="public/image/logo.svg"
          alt="logo"
          className="signup-page-background-logo"
        />
        <Link className="back-button" to="/">
          back to website <FaChevronRight />
        </Link>
      </div>
      <div className="signup-page-inputs-container">
        <div className="signup-page-inputs-header">
          <h2 className="signup-page-inputs-title">create an account</h2>
          <p className="signup-page-inputs-paragraph">
            {" "}
            already have an account? <a href="Login">Log in</a>
          </p>
        </div>
        <div className="signup-page-inputs-content">
          <div className="name-fields">
            <input
              type="text"
              placeholder="First name"
              className="firstName-input"
              required
              value={firstNameInput}
              onChange={(event) => setFirstNameInput(event.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              className="lastName-input"
              required
              value={lastNameInput}
              onChange={(event) => setLastNameInput(event.target.value)}
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="email-input"
            required
            value={emailInput}
            onChange={(event) => setEmailInput(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="password-input"
            required
            value={passwordInput}
            onChange={(event) => setPasswordInput(event.target.value)}
          />

          <div className="checkbox-container">
            <input
              value={checkBox}
              onChange={() => setCheckBox(!checkBox)}
              type="checkbox"
              className="checkbox-input"
              required
            />
            <span className="checkbox-text">
              I agree to the <a href="terms">terms & conditions</a>
            </span>
          </div>
        </div>

        <button
          onClick={() => addUserHandler()}
          className="create-account-button"
        >
          create account
        </button>
      </div>
    </section>
  );
}
