import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { ADD_LOG } from "../../utils/mutations";
import Auth from '../../utils/auth';

import { QUERY_ME } from "../../utils/queries";

const Test = () => {
    const { loading, error, data } = useQuery(QUERY_ME, {
        variables: {"username":"anaeem"}
    });

    return "Sucess"
 
}

export default Test