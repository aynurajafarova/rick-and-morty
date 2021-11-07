import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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

  const history = useHistory();

  useEffect(() => {
    tabs?.map(({ url, value }: ITabItem) => {
      if (history.location.pathname === url) setValue(value as number);
    });
  }, []);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        maxWidth: 225,
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
        {tabs?.map(({ label, url }: ITabItem, index: number) => {
          return (
            <Tab
              key={index}
              {...{ label }}
              onClick={() => {
                history.push(url as string);
              }}
            />
          );
        })}
      </Tabs>
    </Box>
  );
};

export default Navigation;
