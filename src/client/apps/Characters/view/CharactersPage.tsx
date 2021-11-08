import { Dispatch, FC, useEffect } from "react";
import { connect } from "react-redux";
import { Box, Grid } from "@mui/material";

import { fetchCharactersList } from "../api";
import { ICharacterItem, ICharacters } from "../models";
import CharacterCard from "../components/CharacterCard";
import { IAction } from "../../../shared/models";
import {
  ICharactersData,
  ICharactersState,
} from "../../../shared/models/reducer";

interface IProps {
  fetchCharactersList(): (dispatch: Dispatch<IAction>) => void;
  characters: ICharacters;
}

const CharactersPage: FC<IProps> = ({ fetchCharactersList, characters }) => {
  useEffect(() => {
    fetchCharactersList();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} className="rick-and-morty__characters">
      <Grid container spacing={2}>
        {characters?.results?.map(
          ({ id, gender, image, name, species, status }: ICharacterItem) => {
            return (
              <Grid item xs={3} key={id}>
                <CharacterCard {...{ gender, image, name, species, status }} />
              </Grid>
            );
          }
        )}
      </Grid>
    </Box>
  );
};

const mapStateToProps = (state: ICharactersData) => {
  const charactersData: ICharactersState = state.charactersData;
  return {
    characters: charactersData.characters,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchCharactersList: () => dispatch(fetchCharactersList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
