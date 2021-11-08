import { ICharacters } from "../../../apps/characters/models/index";
import { types } from "./types";

export const fetchCharactersRequest = () => {
  return {
    type: types.FETCH_CHARACTERS_REQUEST,
  };
};

export const fetchCharactersSuccess = (characters: ICharacters) => {
  return {
    type: types.FETCH_CHARACTERS_SUCCESS,
    payload: characters,
  };
};

export const fetchCharactersFailure = (error: string) => {
  return {
    type: types.FETCH_CHARACTERS_FAILURE,
    payload: error,
  };
};
