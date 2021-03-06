import { Dispatch } from "react";

import { API_BASE_URL } from "../../../shared/consts/index";
import { IAction } from "../../../shared/models";
import {
  fetchEpisodesFailure,
  fetchEpisodesRequest,
  fetchEpisodesSuccess,
} from "../../../shared/redux/actions/episodesAction";
import { IEpisodesListAPI } from "../models";

export const fetchEpisodesList = ({ page, name }: IEpisodesListAPI) => {
  return (dispatch: Dispatch<IAction>) => {
    dispatch(fetchEpisodesRequest());
    fetch(`${API_BASE_URL}/episode?page=${page}&name=${name}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          throw (response.error)
        }
        dispatch(fetchEpisodesSuccess(response));
        return response;
      })
      .catch((error) => {
        dispatch(fetchEpisodesFailure(error));
      });
  };
};
