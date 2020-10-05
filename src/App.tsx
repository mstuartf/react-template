import React from "react";
import logo from "./assets/logo.svg";

function App() {
  console.log(`running version ${process.env.REACT_APP_ENVIRONMENT}`);
  return (
    <div>
      <header>
        <div className="w-12 h-12">
          <img src={logo} alt="logo" />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-blue-500 hover:text-blue-800"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
