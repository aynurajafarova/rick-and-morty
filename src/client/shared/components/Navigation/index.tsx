import { FC, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { ITabItem } from "../../models";

import "./index.scss";

interface IProps {
  tabs: ITabItem[];
}

const Navigation: FC<IProps> = ({ tabs }) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: 225,
        margin: "0 auto",
      }}
      className="rick-and-morty__navigation"
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        {tabs?.map(({ label }: ITabItem, index: number) => {
          return <Tab key={index} {...{ label }} />;
        })}
      </Tabs>
    </Box>
  );
};

export default Navigation;
