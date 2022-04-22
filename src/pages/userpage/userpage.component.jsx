import React from "react";
import "./userpage.styles.scss";
import { Link } from "react-router-dom";
function Userpage({ user }) {
  return user.isLoggedIn ? (
    <div className="userpage">
      <img src={user.photoUrl} alt="" />
      <h1 className="title">USER PAGE</h1>
      <h2>{user.email}</h2>
    </div>
  ) : (
    <div className="userpage">
      <h1>Please sign in</h1>
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
    </div>
  );
}

export default Userpage;
