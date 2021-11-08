import { combineReducers } from "redux";

import charactersReducer from "./charactersReducer";
import episodesReducer from "./episodesReducer";

const rootReducer = combineReducers({
  charactersData: charactersReducer,
  episodesData: episodesReducer,
});

export default rootReducer;
