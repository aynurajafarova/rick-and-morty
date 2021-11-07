import { Dispatch } from "react";

import {
  fetchCharactersFailure,
  fetchCharactersRequest,
  fetchCharactersSuccess,
} from "../../../shared/redux/actions/charactersAction";
import { API_BASE_URL } from "./../../../shared/consts/index";

interface IActions {
  type: string;
}

export const fetchCharactersList = () => {
  return (dispatch: Dispatch<IActions>) => {
    dispatch(fetchCharactersRequest());
    fetch(`${API_BASE_URL}/character`)
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
