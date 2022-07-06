// Component that displays all the logs that you and your friends have entered.
// Will conditionally render just yours, or all depending on which filter is selected.


<div className="bg-primary text-light mb-4 py-3 flex-row align-center">
  <div className="container flex-row justify-space-between-lg justify-center align-center">
    <div>
      {Auth.loggedIn() ? (
        <>
          <span>Hey there, {Auth.getProfile().data.username}!</span>
          <button className="btn btn-sm btn-info m-2" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <Link className="btn btn-sm btn-info m-2" to="/login">
            Login
          </Link>
        </>
      )}
    </div>
  </div>
</div>;
