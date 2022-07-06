import { useState } from "react";
import { Link } from "react-router-dom";
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
    console.log(formState);
    // try {
    //   const { data } = await login({
    //     variables: { ...formState },
    //   });
    // } catch (e) {
    //   console.error(e);
    // }

    // clear form values
    setFormState({
      username: "",
      email: "",
      password: "",
    });
  };

  const successMessage = () => {
    return (
      <div>
        <h1>
          Congratulations, {formState.username}! You are now a memeber of Dive
          Buddy!
        </h1>
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
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Create Account</h4>
          <div className="card-body">
            {data ? (
              <p>
                {successMessage()}{" "}
                <Link to="/login">Return to Login.</Link>
              </p>
            ) : (
              <div>
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="form-input"
                    placeholder="username"
                    name="email"
                    type="email"
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
  );
}
