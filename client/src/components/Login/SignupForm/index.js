import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../../utils/mutations";

export default function SignupForm() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [signup, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await signup({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const successMessage = () => {
    return (
      <div>
        <h3>Congratulations! You are now a member of Dive Buddy!</h3>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
  return (
    <>
      <main className="flex-column justify-center">
        <div>
          <div className="card">
            <h4 className="card-header bg-dark text-light p-2">
              Create Account
            </h4>
            <div className="card-body">
              {data ? (
                <div>{successMessage()} </div>
              ) : (
                <div>
                  <form onSubmit={handleFormSubmit}>
                    <input
                      className="form-input"
                      placeholder="username"
                      name="username"
                      type="username"
                      value={formState.username}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <input
                      className="form-input"
                      placeholder="********"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                    <button
                      className="btn btn-block btn-primary"
                      style={{ cursor: "pointer" }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}

              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {errorMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
