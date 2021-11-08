import { ICharacters, ICharacterItem } from "../../../apps/characters/models/index";
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


export const fetchSingleCharacterRequest = () => {
  return {
    type: types.FETCH_SINGLE_CHARACTER_REQUEST,
  };
};

export const fetchSingleCharacterSuccess = (character: ICharacterItem) => {
  return {
    type: types.FETCH_SINGLE_CHARACTER_SUCCESS,
    payload: character,
  };
};

export const fetchSingleCharacterFailure = (error: string) => {
  return {
    type: types.FETCH_SINGLE_CHARACTER_FAILURE,
    payload: error,
  };
};

export const resetSingleCharacter = () => {
  return {
    type: types.RESET_SINGLE_CHARACTER,
  };
}