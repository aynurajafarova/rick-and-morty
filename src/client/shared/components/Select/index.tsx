import { FC } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { ISelectOption } from "../../models";

import "./index.scss";

interface IProps {
  options: ISelectOption[];
  label: string;
  onChange: any;
}

const Select: FC<IProps> = ({ options, label, onChange }) => {
  return (
    <Autocomplete
      className="rick-and-morty__select"
      disablePortal
      id="combo-box-demo"
      {...{ options, onChange }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} {...{ label }} />}
    />
  );
};

export default Select;
