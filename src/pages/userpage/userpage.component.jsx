import React from "react";
import "./userpage.styles.scss";
function Userpage({ user }) {
  return (
    <div className="userpage">
      <h1 className="title">USER PAGE</h1>
      <h2>{user.email}</h2>
    </div>
  );
}

export default Userpage;
