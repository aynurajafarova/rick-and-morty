import { ICharacters } from "../../../apps/characters/models/character";
import { types } from "../actions/types";
import { IAction } from "../../models/action";

interface IInitialState {
  loading: boolean;
  characters: ICharacters;
  error: string;
}

const initialState: IInitialState = {
  loading: false,
  characters: {},
  error: "",
};

const reducer = (state = initialState, { type, payload }: IAction) => {
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

export default reducer;
