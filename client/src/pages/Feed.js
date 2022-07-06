import React from "react";


// container component
// If user is logged in, render their feed. Else, redirect them to Login page. 

const Feed = (props) => {
  return (
    <main className="flex-column justify-center mb-4">
        <div className="container text-center">
          {/* Will replace with user's actual username. */}
          <p>UserName's Feed</p>
        </div>

    </main>
  );
};

export default Feed;