import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComponent2 from "./components/MainComponent2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainComponent2 />} />
      </Routes>
    </Router>
  );
};

export default App;
