import React, { useState } from "react";
import LoginForm from "../components/Login/LoginForm";
import SignupForm from "../components/Login/SignupForm";


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
              Return to Login
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

  return (
    <main className="flex-row justify-center mb-4">
      <div className="container text-center">
        {handleFormChange}
        {renderForm()}
      </div>
    </main>
  );
}
