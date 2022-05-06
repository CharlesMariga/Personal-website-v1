import React from "react";
import { Provider } from "react-redux";
import store from "./src/app/store";

const Wrapper = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};

export default Wrapper;
