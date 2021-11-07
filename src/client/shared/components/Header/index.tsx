import { FC } from "react";
import { Box } from "@mui/material";

import { ITabItem } from "../../models";
import Navigation from "../Navigation";

import "./index.scss";

interface IProps {
  title: string;
}

const Header: FC<IProps> = ({ title }) => {
  const tabs: ITabItem[] = [{ label: "Characters" }, { label: "Episodes" }];

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
