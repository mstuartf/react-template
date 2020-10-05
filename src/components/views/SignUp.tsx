import React, { useState } from "react";
import Btn from "../atoms/Btn";
import ControlledInput from "../atoms/ControlledInput";
import PlainLink from "../atoms/PlainLink";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    console.log(name, email, password);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <ControlledInput
            defaultValue={name}
            onChange={setName}
            placeholder="Mr Test"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email Address
          </label>
          <ControlledInput
            defaultValue={email}
            onChange={setEmail}
            type="email"
            placeholder="test@test.com"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <ControlledInput
            defaultValue={password}
            onChange={setPassword}
            type="password"
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <Btn type="submit">Create an account</Btn>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        Already have an account? <PlainLink to="/login">Click here</PlainLink>.
      </p>
    </>
  );
};

export default SignUp;
