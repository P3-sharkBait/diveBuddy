import React, { useState } from "react";
import LoginForm from "../components/Login/LoginForm";
import SignupForm from "../components/Login/SignupForm";

export default function Login() {
  const [currentForm, setForm] = useState("login");
  const renderForm = () => {
    if (currentForm !== "login") {
      return (
        <main className="flex-column justify-center">
          <div className="flex-column">
            <SignupForm />
            <div className="loginBtn">
              {" "}
              <button
                id="backToLogin-btn"
                className="btn btn-sm btn-info mx-2"
                onClick={() => setForm("login")}
              >
                Return to Login
              </button>{" "}
            </div>
          </div>
        </main>
      );
    }
    return (
      <main className="flex-column justify-center">
        <div className="flex-column">
          <LoginForm />
          <div className="loginBtn">
            {" "}
            <button
              id="createAccount-btn"
              className="btn btn-sm btn-info mx-2"
              onClick={() => setForm("signup")}
            >
              Create Account
            </button>{" "}
          </div>
        </div>
      </main>
    );
  };

  const handleFormChange = (form) => setForm(form);

  return (
    <>
      <div className="water"></div>
      <main className="container flex-column justify-center">
        <div className="content text-center">
          {handleFormChange}
          {renderForm()}
        </div>
      </main>
    </>
  );
}
