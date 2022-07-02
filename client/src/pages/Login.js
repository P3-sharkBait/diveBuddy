import React, { useState } from "react";
import LoginForm from "../components/Login/LoginForm";
import SignupForm from "../components/Login/SignupForm";

// need a click event in LoginForm.js to change state here.

export default function Login() {
  const [currentForm, setForm] = useState("login");
  const renderForm = () => {
    if (currentForm !== "login") {
      return (
        <>
          <SignupForm />
          <>
            {" "}
            <button
              id="backToLogin-btn"
              className="btn btn-sm btn-info mx-2"
              onClick={() => setForm("login")}
            >
              Already Registered?
            </button>{" "}
          </>
        </>
      );
    }
    return (
      <>
        <LoginForm />
        <>
          {" "}
          <button
            id="createAccount-btn"
            className="btn btn-sm btn-info mx-2"
            onClick={() => setForm("signup")}
          >
            Create Account
          </button>{" "}
        </>
      </>
    );
  };

  const handleFormChange = (form) => setForm(form);

  // conditionally render loginForm or signupForm
  return (
    <main className="flex-row justify-center mb-4">
      <div className="container text-center">
        {handleFormChange}
        {renderForm()}
      </div>
    </main>
  );
}
