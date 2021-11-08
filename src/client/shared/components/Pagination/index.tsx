import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "./index.scss";

interface IProps {
  count?: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const BasicPagination: FC<IProps> = ({ count, page, setPage }) => {
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack
      spacing={2}
      marginTop={6}
      marginBottom={6}
      className="rick-and-morty__pagination center"
    >
      <Pagination {...{ count, page }} onChange={handleChange} />
    </Stack>
  );
};

export default BasicPagination;
