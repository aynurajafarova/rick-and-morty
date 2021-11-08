import { Dispatch } from "react";

import { API_BASE_URL } from "../../../shared/consts/index";
import { IAction } from "../../../shared/models";
import {
  fetchEpisodesFailure,
  fetchEpisodesRequest,
  fetchEpisodesSuccess,
} from "../../../shared/redux/actions/episodesAction";

export const fetchEpisodesList = () => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch(fetchEpisodesRequest());
    fetch(`${API_BASE_URL}/episode`)
      .then((response) => response.json())
      .then((responseJSON) => {
        const episodesData = responseJSON;
        dispatch(fetchEpisodesSuccess(episodesData));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(fetchEpisodesFailure(errMsg));
      });
  };
};
