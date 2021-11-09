import { ChangeEvent, FC, useState } from "react";
import TextField from "@mui/material/TextField";

import './index.scss';

interface IProps {
  label?: string;
}

const Input: FC<IProps> = ({ label }) => {
  const [value, setValue] = useState<string>();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <TextField
      id="outlined-name"
      className="rick-and-morty__input"
      label={label}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
