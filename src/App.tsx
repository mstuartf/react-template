import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthCheck from "./components/layout/AuthCheck";

const App = () => (
  <Router>
    <AuthCheck />
  </Router>
);

export default App;
