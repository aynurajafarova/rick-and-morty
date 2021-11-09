import { ChangeEvent, useState } from "react";
import TextField from "@mui/material/TextField";

export default function StateTextFields() {
  const [value, setValue] = useState<string>();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <TextField
      id="outlined-name"
      label="Name"
      value={value}
      onChange={handleChange}
    />
  );
}
