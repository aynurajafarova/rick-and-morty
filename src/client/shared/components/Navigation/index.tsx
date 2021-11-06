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
    <Box sx={{ maxWidth: 480, bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        {tabs?.map(({ label }: ITabItem) => {
          return <Tab label={label} />;
        })}
      </Tabs>
    </Box>
  );
};

export default Navigation;
