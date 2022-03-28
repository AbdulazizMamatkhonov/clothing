import "./App.css";
import { React, Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth } from "./firebase/firebase.utils";
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
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
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
            element={<Userpage user={this.state.currentUser} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
