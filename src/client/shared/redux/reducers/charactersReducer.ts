import { types } from "../actions/types";
import { IAction } from "../../models";
import { ICharactersState } from "../../models/reducer";

const initialState: ICharactersState = {
  loading: false,
  characters: {},
  error: "",
  singleCharacter: {},
};

const charactersReducer = (state = initialState, { type, payload }: IAction) => {
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
    case types.FETCH_SINGLE_CHARACTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_SINGLE_CHARACTER_SUCCESS:
      return {
        ...state,
        singleCharacter: payload,
        loading: false,
        error: "",
      };
    case types.FETCH_SINGLE_CHARACTER_FAILURE:
      return {
        loading: false,
        singleCharacter: {},
        error: payload,
      };
    case types.RESET_SINGLE_CHARACTER:
      return {
        ...state,
        singleCharacter: {},
      }
    default:
      return state;
  }
};

export default charactersReducer;