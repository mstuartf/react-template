import React from "react";
import { Link } from "react-router-dom";

const Login = () => (
  <>
    <p className="text-center text-gray-500 text-xs">
      Don't have an account? <Link to="/sign-up">Click here</Link>.
    </p>
  </>
);

export default Login;
