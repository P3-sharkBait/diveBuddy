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