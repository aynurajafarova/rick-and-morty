import { FC, useEffect } from "react";
import { connect } from "react-redux";
import { Box, Grid } from "@mui/material";

import { fetchCharactersList } from "../api";
import { ICharacterItem } from "../models/character";
import CharacterCard from "../components/CharacterCard";

const CharactersPage: FC = ({ fetchCharactersList, characters }: any) => {
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

const mapStateToProps = (state: any) => {
  return {
    characters: state.charactersData.characters,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchCharactersList: () => dispatch(fetchCharactersList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
