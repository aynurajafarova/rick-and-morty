import { FC } from "react";
import { Box } from "@mui/material";

import { ITabItem } from "../../models";
import Navigation from "../Navigation";
import { ROUTES } from "../../routes/consts";

import "./index.scss";

interface IProps {
  title: string;
}

const Header: FC<IProps> = ({ title }) => {
  const tabs: ITabItem[] = [
    { value: 0, label: "Characters", url: ROUTES.CHARACTERS.PATH },
    { value: 1, label: "Episodes", url: ROUTES.EPISODES.PATH },
  ];

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", paddingTop: 4 }}
    >
      <div className="rick-and-morty__header">
        <h1>{title}</h1>
      </div>
      <Navigation {...{ tabs }} />
    </Box>
  );
};

export default Header;
