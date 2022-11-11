import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FRIEND } from "../../utils/mutations";
import Auth from "../../utils/auth";

const AddFriendForm = () => {
  const [formState, setFormState] = useState({ id: "" });
  const [addFriend, { error, data }] = useMutation(ADD_FRIEND);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const username = Auth.getProfile().data.username;
    try {
      const { data } = await addFriend({
        variables: { username: username, ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      id: "",
    });
  };

  return (
    <div className="my-5">
      <div className="dashContainer p-2">
        <h3>Add a Friend</h3>
        <form onSubmit={handleFormSubmit}>
          <input
            className="form-input"
            placeholder="friendID"
            name="id"
            type="text"
            value={formState.id}
            onChange={handleChange}
          />
          <button
            id="loginSubmit"
            className="btn btn-block btn-primary"
            style={{ cursor: "pointer" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddFriendForm;
