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
import { ICharactersListAPI } from "../models";

export const fetchCharactersList = ({
  page,
  name,
  status,
  species,
  gender,
}: ICharactersListAPI) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch(fetchCharactersRequest());
    fetch(
      `${API_BASE_URL}/character?page=${page}&name=${name}&status=${status}&species=${species}&gender=${gender}`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          throw (response.error)
        }
        dispatch(fetchCharactersSuccess(response));
        return response;
      })
      .catch((error) => {
        dispatch(fetchCharactersFailure(error));
      });
  };
};

export const fetchSingleCharacter = (id: number) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch(fetchSingleCharacterRequest());
    fetch(`${API_BASE_URL}/character/${id}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          throw (response.error)
        }
        dispatch(fetchSingleCharacterSuccess(response));
        return response;
      })
      .catch((error) => {
        dispatch(fetchSingleCharacterFailure(error));
      });
  };
};
