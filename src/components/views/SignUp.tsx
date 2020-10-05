import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => (
  <>
    <p className="text-center text-gray-500 text-xs">
      Already have an account? <Link to="/login">Click here</Link>.
    </p>
  </>
);

export default SignUp;
