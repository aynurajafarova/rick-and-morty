import { IAction } from "../../models";
import { IEpisodesState } from "../../models/reducer";
import { types } from "../actions/types";

const initialState: IEpisodesState = {
  loading: false,
  episodes: {},
  error: "",
};

export default (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case types.FETCH_EPISODES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_EPISODES_SUCCESS:
      return {
        episodes: payload,
        loading: false,
        error: "",
      };
    case types.FETCH_EPISODES_FAILURE:
      return {
        loading: false,
        episodes: {},
        error: payload,
      };
    default:
      return state;
  }
};
