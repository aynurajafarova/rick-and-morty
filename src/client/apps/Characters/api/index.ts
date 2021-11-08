import { Dispatch } from "react";

import {
  fetchCharactersFailure,
  fetchCharactersRequest,
  fetchCharactersSuccess,
  fetchSingleCharacterRequest,
  fetchSingleCharacterSuccess,
  fetchSingleCharacterFailure,
} from "../../../shared/redux/actions/charactersAction";
import { API_BASE_URL } from "../../../shared/consts/index";
import { IAction } from "../../../shared/models";

export const fetchCharactersList = (page: number) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch(fetchCharactersRequest());
    fetch(`${API_BASE_URL}/character?page=${page}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        const charactersData = responseJSON;
        dispatch(fetchCharactersSuccess(charactersData));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchCharactersFailure(errMsg));
      });
  };
};

export const fetchSingleCharacter = (id: number) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch(fetchSingleCharacterRequest());
    fetch(`${API_BASE_URL}/character/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        const characterData = responseJSON;
        dispatch(fetchSingleCharacterSuccess(characterData));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchSingleCharacterFailure(errMsg));
      });
  };
};
