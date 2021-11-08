import { IEpisodes } from "../../../apps/episodes/models/index";
import { types } from "./types";

export const fetchEpisodesRequest = () => {
  return {
    type: types.FETCH_EPISODES_REQUEST,
  };
};

export const fetchEpisodesSuccess = (episodes: IEpisodes) => {
  return {
    type: types.FETCH_EPISODES_SUCCESS,
    payload: episodes,
  };
};

export const fetchEpisodesFailure = (error: string) => {
  return {
    type: types.FETCH_EPISODES_FAILURE,
    payload: error,
  };
};
