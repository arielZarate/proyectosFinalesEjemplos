import { combineReducers } from "redux";
import filtres_reducer from "./filtres_reducer";
import pets_reducer from "./pets_reducer";

const rootReducer = combineReducers({
  //aca combino los reducer
  filtres_reducer,
  pets_reducer,
});

export default rootReducer;
