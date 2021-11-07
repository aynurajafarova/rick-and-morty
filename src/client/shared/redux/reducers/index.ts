import { combineReducers } from "redux";

import charactersReducer from "./charactersReducer";

const rootReducer = combineReducers({
  charactersData: charactersReducer,
});

export default rootReducer;
