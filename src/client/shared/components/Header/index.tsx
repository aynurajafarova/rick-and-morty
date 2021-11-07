import { FC } from "react";

import "./index.scss";

interface IProps {
  title: string;
}

const Header: FC<IProps> = ({ title }) => {
  return <h1 className="rick-and-morty__header">{title}</h1>;
};

export default Header;
