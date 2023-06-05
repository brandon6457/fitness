import React, { useState, useEffect } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import Profile from "./pages/Profile/Profile";
import Signup from "./pages/Signup/Signup";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
