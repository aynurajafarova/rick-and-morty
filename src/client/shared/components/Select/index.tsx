import { FC, useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { ISelectOption } from "../../models";

import "./index.scss";

interface IProps {
  options: ISelectOption[];
  label: string;
}

const Select: FC<IProps> = ({ options, label }) => {
  const [value, setValue] = useState();
  return (
    <Autocomplete
      className="rick-and-morty__select"
      disablePortal
      id="combo-box-demo"
      {...{ options }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} {...{ label }} />}
      onChange={(event: any, value: any) => {
        console.log(value);
      }}
    />
  );
};

export default Select;
