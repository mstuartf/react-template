import React, { useEffect } from "react";
import AuthCheck from "./components/layout/AuthCheck";
import { useDispatch } from "react-redux";
import { loadCache } from "./store/slices/account/actions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCache());
  }, [dispatch]);

  return <AuthCheck />;
};

export default App;
