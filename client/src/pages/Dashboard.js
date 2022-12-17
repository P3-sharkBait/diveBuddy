import React from "react";
import Auth from "../utils/auth";
import UserInfo from "../components/Feed/UserInfo";
import AddFriendForm from "../components/AddFriend";
import RemoveAcountButton from "../components/DeleteAccount";
import { Navigate } from "react-router-dom";
import DashboardDiveContainer from "../components/DashboardDiveContainer";

function Dashboard() {
  if (!Auth.loggedIn()) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <div className="water"></div>
      <main className="container flex-column justify-center">
        <div className="container text-center mt-4">
          <div className="dashContainer">
            <UserInfo />
          </div>
          <div className="diveFeed text-center flex-row">
            <DashboardDiveContainer />
            <div className="mx-5">
              <AddFriendForm />
              <RemoveAcountButton />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Dashboard;
