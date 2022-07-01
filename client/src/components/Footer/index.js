import React from "react";

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-2">
        <button className="btn btn-sm btn-info m-2">
          About/Donate
        </button>
        <button className="btn btn-sm btn-light m-2">
          GitHub Repo
        </button>
      </div>
      <div className="container text-center mb-2">
        <p>
          &copy; 2022 Andrew Moody, Abeer Naeem, William Qualls, Nat Triffo, &
          Theo Ward
        </p>
      </div>
    </footer>
  );
};

export default Footer;
