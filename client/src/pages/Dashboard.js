import React from 'react'
import DiveList from '../components/Feed/DiveList'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { Link } from "react-router-dom";
import Auth from '../utils/auth';
import newCard from '../components/newCard';

function Dashboard({ logs = [] }) {
  const username = Auth.getProfile().data.username;

  const { loading: loadingMe, data: myData } = useQuery(QUERY_ME, { variables: { username: username } });
  const me = myData?.user || [];

  const myDives = logs.myDives;
  console.log("PROPS", logs)
  console.log("DIVES", myDives)
  // const diveLists = myDives.map((myDives) =>  
  //   <li>{myDives}</li>  

  // );  

  return (
    <>
      {/* heading */}
      <div id="dashBoard-listNames" className="row text-dark">
        <h4 className="text-center col-md-6" >Previous Dives</h4>
        <h4 className="text-center col-md-6" >Manage Dives</h4>
      </div>
      {/* content */}
      <div className="container py-3 text-white row bg-dark p-2 bg-opacity-25 shadow mb-5 rounded" id="userContainer">
        <h1>CONTENT</h1>
        <div className="col rounded m-3">
          <div className="card text-dark shadow m-2 align-center">
            <div className="card-body">
              {/* <ul>{diveLists}</ul>   */}
              < newCard />
              {/* todo button to nav to dive details */}

            </div>

            <div id="filterContainer" className="flex-row justify-center">
              <button className="btn btn-sm btn-light m-2">Search For Friends</button>
            </div>


            <Link to="/form" className="flex-column justify-center">
              <button>Edit Form</button>
            </Link>
            <Link to="/form" className="flex-column justify-center">
              <button>Delete Form</button>
            </Link>




          </div>
        </div>
      </div>
    </>
  )
}
export default Dashboard