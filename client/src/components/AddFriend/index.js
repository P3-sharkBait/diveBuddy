import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_FRIEND } from "../../utils/mutations";
import Auth from "../../utils/auth";

const AddFriendForm = () => {
    const [formState, setFormState] = useState({ _id: "" });
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
        console.log("adding friend");
        console.log(formState);
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
            _id: "",
        });
    };

    return (
        <>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <input
                        className="form-input"
                        placeholder="friendID"
                        name="friendID"
                        type="text"
                        value={formState._id}
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
        </>
    )
};

export default AddFriendForm