import { types } from "../actions/types";
import { IAction } from "../../models";
import { ICharactersState } from "../../models/reducer";

const initialState: ICharactersState = {
  loading: false,
  characters: {},
  error: "",
};

export default (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case types.FETCH_CHARACTERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_CHARACTERS_SUCCESS:
      return {
        characters: payload,
        loading: false,
        error: "",
      };
    case types.FETCH_CHARACTERS_FAILURE:
      return {
        loading: false,
        characters: {},
        error: payload,
      };
    default:
      return state;
  }
};
