import { FC } from "react";

import "./index.scss";

const Loader: FC = () => {
  return (
    <div className="wrapper">
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
