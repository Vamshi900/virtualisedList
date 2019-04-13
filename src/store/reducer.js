import { combineReducers } from "redux";
import HomePage from "../app/Modules/Homepage/";

export default combineReducers({
  [HomePage.constants.NAME]: HomePage.reducer
});
