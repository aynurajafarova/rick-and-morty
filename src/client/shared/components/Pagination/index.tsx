import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import { ICharactersListAPI } from "../../../apps/characters/models";

import "./index.scss";

interface IProps {
  count?: number;
  params: ICharactersListAPI;
  setParams: Dispatch<SetStateAction<ICharactersListAPI>>;
}

const BasicPagination: FC<IProps> = ({ count, params, setParams }) => {
  const { page } = params;

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setParams((prevState: ICharactersListAPI) => {
      return {
        ...prevState,
        page: value,
      };
    });
  };

  return (
    <Stack
      spacing={2}
      marginTop={6}
      marginBottom={8}
      className="rick-and-morty__pagination center"
    >
      <Pagination {...{ count, page }} onChange={handleChange} />
    </Stack>
  );
};

export default BasicPagination;
