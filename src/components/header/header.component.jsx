import React from "react";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
const Header = (props) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACTS
        </Link>
        {props.currentUser ? (
          <div className="user-container">
            <div
              className="option"
              onClick={() => {
                auth.signOut();
              }}
            >
              SIGN OUT
            </div>
            <Link className="option userLink" to="/user">
              user
            </Link>
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon></CartIcon>
      </div>
      {props.hidden ? null : <CartDropdown />}
    </div>
  );
};
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});
export default connect(mapStateToProps)(Header);
