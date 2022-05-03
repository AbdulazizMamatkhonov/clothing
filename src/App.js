import "./App.css";
import { React, Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import {
  auth,
  createUserProfileDocument,
  firestore,
} from "./firebase/firebase.utils";
import Userpage from "./pages/userpage/userpage.component";
const ErrorPage = () => (
  <div>
    <h1>Error Page</h1>
  </div>
);
class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    console.log(
      firestore.collection("users").doc("U65NuvYPi7bmQ01xEfr6yscg1TJ2")
    );
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const useRef = await createUserProfileDocument(user);
        useRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="main-container">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/signin"
            element={
              this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp />
            }
          />
          {/* <Route
            path="/user"
            element={<Userpage  />}
          /> */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}
const mapDispacthToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
export default connect(mapStateToProps, mapDispacthToProps)(App);
