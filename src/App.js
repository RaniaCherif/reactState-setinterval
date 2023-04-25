import "./App.css";
import Profile from "./component/Profile";
import Home from "./component/Home";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
