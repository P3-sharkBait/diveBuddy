import React from 'react'
import Auth from '../utils/auth';
import UserInfo from '../components/Feed/UserInfo';
import AddFriendForm from '../components/AddFriend';
import RemoveAcountButton from '../components/DeleteAccount';



import DashboardDiveContainer from '../components/DashboardDiveContainer';

function Dashboard() {
  return (
    <main className="subBG flex-column justify-center mb-4">
      <div className="container text-center">
        <UserInfo />
        <div className="flex-row justify-center">
          <DashboardDiveContainer />
        </div>
        <div className='bg-primary col-12 mb-3 p-3'>
          <AddFriendForm />
        </div>
        <div className='bg-primary col-12 mb-3 p-3'>
          <RemoveAcountButton />
        </div>
      </div>
    </main>
  )
}
export default Dashboard