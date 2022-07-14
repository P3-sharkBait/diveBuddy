import React from "react";
import Auth from "../utils/auth";
import UserInfo from "../components/Feed/UserInfo";
import AddFriendForm from "../components/AddFriend";
import RemoveAcountButton from "../components/DeleteAccount";

import DashboardDiveContainer from "../components/DashboardDiveContainer";

function Dashboard() {
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
