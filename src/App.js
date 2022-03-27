import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
function App() {
  const ErrorPage = () => (
    <div>
      <h1>Error Page</h1>
    </div>
  );

  return (
    <div className="main-container">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInAndSignUp />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
