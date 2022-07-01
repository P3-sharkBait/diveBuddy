import e from "express";
import React, { useState } from "react";
import { LoginForm } from "../components/LoginForm/index";
import { SignupForm } from "../components/SignupForm/index";

// newAccount false renders loginForm, newAccount true (only possible via button click) renders signupForm
const Login = (props) => {
  let newAccount = false;
  function signUpButton() {
    e.preventDefault();
    let newAccount = true;
    return newAccount;
  }
  // conditionally render loginForm or signupForm
  return (
    <main className="flex-row justify-center mb-4">
      <div className="container text-center">
        <button onClick={signUpButton()}>
          Create Account
        </button>

      </div>
    </main>
  );
};

export default Login;
