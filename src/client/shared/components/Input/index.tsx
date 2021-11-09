import { ChangeEvent, FC } from "react";
import TextField from "@mui/material/TextField";

import "./index.scss";

interface IProps {
  label?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({ label, onChange }) => {
  return (
    <TextField
      id="outlined-name"
      className="rick-and-morty__input"
      label={label}
      {...{ onChange }}
    />
  );
};

export default Input;
