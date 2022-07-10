import React from "react";
import { Provider } from "react-redux";
import store from "./src/app/store";

interface Props {
  element: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};

export default Wrapper;
