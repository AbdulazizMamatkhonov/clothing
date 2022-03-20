import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
function App() {
  const HatsPage = () => (
    <div>
      <h1>Hats</h1>
    </div>
  );
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/hats" element={<HatsPage></HatsPage>} />
      </Routes>
    </div>
  );
}

export default App;
