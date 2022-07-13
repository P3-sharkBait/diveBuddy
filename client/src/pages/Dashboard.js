import React from 'react'
import DiveList from '../components/Feed/DiveList'
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { Link } from "react-router-dom";
import Auth from '../utils/auth';



import DashboardDiveContainer from '../components/DashboardDiveContainer';

function Dashboard() {
  return (
    <main className="subBG flex-column justify-center mb-4">
      <div className="container text-center">
        <div className="flex-row justify-center">
          <DashboardDiveContainer />
        </div>
      </div>
    </main>
  )
}
export default Dashboard