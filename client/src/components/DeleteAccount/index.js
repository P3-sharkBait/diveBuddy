import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { REMOVE_USER } from "../../utils/mutations";
import Auth from "../../utils/auth";

const RemoveAcountButton = () => {
    const [removeUser, { error, data }] = useMutation(REMOVE_USER)
    const [formState, setFormState] = useState({ email: "", password: "" });
    const id = Auth.getProfile().data._id
    const [show, setShow] = useState(false);
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };
    const handleClickDelete = id => {
        if (show) {
            setShow(false)
        } else {
            setShow(id)
        }
    };
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await removeUser({
                variables: { ...formState },
            });
            setFormState({
                email: "",
                password: "",
            });
            Auth.logout();
        } catch (e) {
            console.error(e);
        }

    }
    return (
        <div className="mt-4">
            <button type="button" className="btn btn-sm btn-danger m-3" onClick={() => handleClickDelete(id)}>{id == show ? 'Cancel' : "Delete Account"}</button>
            <form onSubmit={handleFormSubmit} className={id == show ? 'dashContainer p-3' : 'hideInfo'}>
                <h6>Enter Username and Password to Confirm Deletion</h6>
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
                    id={id}
                    className="btn btn-block btn-danger"
                    style={{ cursor: "pointer" }}
                    type="submit"
                >
                    Confirm Delete
                </button>
            </form>
        </div>
    )
}

export default RemoveAcountButton