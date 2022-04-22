import "./App.css";
import { React, Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
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
  constructor() {
    super();
    this.state = {
      currentUser: null,
      userPageUser: {},
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    console.log(
      firestore.collection("users").doc("U65NuvYPi7bmQ01xEfr6yscg1TJ2")
    );
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const useRef = await createUserProfileDocument(user);
        useRef.onSnapshot((snapshot) => {
          console.log(user);
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
            userPageUser: {
              isLoggedIn: true,
              photoUrl: user.photoURL,
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      } else {
        this.setState({
          currentUser: null,
          userPageUser: {
            isLoggedIn: false,
          },
        });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div className="main-container">
        <Header currentUser={this.state.currentUser} />

        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
          <Route
            path="/user"
            element={<Userpage user={this.state.userPageUser} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
