import { Dispatch, FC, useEffect, useState } from "react";
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
import Pagination from "../../../shared/components/Pagination/index";
import Modal from "../../../shared/components/Modal/index";

interface IProps {
  fetchCharactersList(page: number): (dispatch: Dispatch<IAction>) => void;
  characters: ICharacters;
}

const CharactersPage: FC<IProps> = ({ fetchCharactersList, characters }) => {
  const [page, setPage] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);
  const [characterID, setCharacterID] = useState<number>();

  const handleOpen = () => setOpen(true);

  useEffect(() => {
    fetchCharactersList(page);
  }, [page]);

  return (
    <>
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
                      setCharacterID(id && id);
                    }}
                  />
                </Grid>
              );
            }
          )}
        </Grid>
      </Box>
      <Pagination count={characters?.info?.pages} {...{ page, setPage }} />
      <Modal {...{ open, setOpen, characterID }} />
    </>
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
    fetchCharactersList: (page: number) => dispatch(fetchCharactersList(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
