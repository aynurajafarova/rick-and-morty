import { ChangeEvent, Dispatch, FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Box, Grid } from "@mui/material";

import { fetchCharactersList, fetchSingleCharacter } from "../api";
import { ICharacterItem, ICharacters, ICharactersListAPI } from "../models";
import CharacterCard from "../components/CharacterCard";
import { IAction, ISelectOption } from "../../../shared/models";
import {
  ICharactersData,
  ICharactersState,
} from "../../../shared/models/reducer";
import Pagination from "../../../shared/components/Pagination/index";
import CharacterModal from "../components/CharacterModal/index";
import { resetSingleCharacter } from "../../../shared/redux/actions/charactersAction";
import Loader from "../../../shared/components/Loader";
import Select from "../../../shared/components/Select";
import Input from "../../../shared/components/Input";

interface IProps {
  fetchCharactersList(
    params: ICharactersListAPI
  ): (dispatch: Dispatch<IAction>) => void;
  fetchSingleCharacter(id: number): (dispatch: Dispatch<IAction>) => void;
  resetSingleCharacter(): (dispatch: Dispatch<IAction>) => void;
  characters: ICharacters;
  singleCharacter: ICharacterItem;
  loading?: boolean;
}

const CharactersPage: FC<IProps> = ({
  fetchCharactersList,
  fetchSingleCharacter,
  resetSingleCharacter,
  characters,
  singleCharacter,
  loading,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [params, setParams] = useState<ICharactersListAPI>({
    name: "",
    page: 1,
    status: "",
    species: "",
    gender: "",
  });

  const statusOptions: ISelectOption[] = [
    { key: "alive", label: "Alive" },
    { key: "dead", label: "Dead" },
    { key: "unknown", label: "Unknown" },
  ];

  const genderOptions: ISelectOption[] = [
    { key: "female", label: "Female" },
    { key: "male", label: "Male" },
    { key: "genderless", label: "Genderless" },
    { key: "unknown", label: "Unknown" },
  ];

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    resetSingleCharacter();
  };

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setParams((prevState: ICharactersListAPI) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  };

  const handleChangeSpecies = (event: ChangeEvent<HTMLInputElement>) => {
    setParams((prevState: ICharactersListAPI) => {
      return {
        ...prevState,
        species: event.target.value,
      };
    });
  };

  const handleChangeGender = (
    event: ChangeEvent<HTMLInputElement>,
    value: ISelectOption
  ) => {
    setParams((prevState: ICharactersListAPI) => {
      return {
        ...prevState,
        gender: value?.key || "",
      };
    });
  };

  const handleChangeStatus = (
    event: ChangeEvent<HTMLInputElement>,
    value: ISelectOption
  ) => {
    setParams((prevState: ICharactersListAPI) => {
      return {
        ...prevState,
        status: value?.key || "",
      };
    });
  };

  useEffect(() => {
    fetchCharactersList(params);
  }, [params]);

  console.log("parans", params);

  return (
    <>
      <Box sx={{ display: "flex", marginTop: 3, marginBottom: 6 }}>
        <Input label="Name" onChange={handleChangeName} />
        <Input label="Species" onChange={handleChangeSpecies} />
        <Select
          options={statusOptions}
          label="Status"
          onChange={handleChangeStatus}
        />
        <Select
          options={genderOptions}
          label="Gender"
          onChange={handleChangeGender}
        />
      </Box>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box sx={{ flexGrow: 1 }} className="rick-and-morty__characters">
            <Grid container spacing={2}>
              {characters?.results?.map(
                ({
                  id,
                  gender,
                  image,
                  name,
                  species,
                  status,
                }: ICharacterItem) => {
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
          {characters?.info?.pages && (
            <Pagination
              count={characters?.info?.pages}
              {...{ params, setParams }}
            />
          )}
          {singleCharacter && (
            <CharacterModal {...{ open, singleCharacter, handleClose }} />
          )}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state: ICharactersData) => {
  const charactersData: ICharactersState = state.charactersData;
  return {
    characters: charactersData.characters,
    singleCharacter: charactersData.singleCharacter,
    loading: charactersData.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchCharactersList: (params: ICharactersListAPI) =>
      dispatch(fetchCharactersList(params)),
    fetchSingleCharacter: (characterID: number) =>
      dispatch(fetchSingleCharacter(characterID)),
    resetSingleCharacter: () => dispatch(resetSingleCharacter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
