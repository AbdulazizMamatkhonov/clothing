import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Link to="/">Home</Link>
    </div>
  );
}

export default App;
