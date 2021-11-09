import { Dispatch, FC } from "react";
import { Box, Grid } from "@mui/material";

import { IAction } from "../../../../shared/models";
import { ICharacterItem, ICharacters } from "../../models";
import CharacterCard from "./CharacterCard";

interface IProps {
  characters: ICharacters;
  handleOpen: () => void;
  fetchSingleCharacter(id: number): (dispatch: Dispatch<IAction>) => void;
}

const Characters: FC<IProps> = ({
  characters,
  handleOpen,
  fetchSingleCharacter,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }} className="rick-and-morty__characters">
      <Grid container spacing={2}>
        {characters?.results?.map(
          ({ id, gender, image, name, species, status }: ICharacterItem) => {
            return (
              <Grid item xs={3} key={id}>
                <CharacterCard
                  {...{ gender, image, name, species, status }}
                  openModal={() => {
                    handleOpen();
                    fetchSingleCharacter(id as number);
                  }}
                />
              </Grid>
            );
          }
        )}
      </Grid>
    </Box>
  );
};

export default Characters;
