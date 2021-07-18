import { combineReducers } from "redux";
import data_reducer from "./data_reducer.js";
import toggle_view_reducer from "./toggle_view_reducer.js";
const rootReducer = combineReducers({
  expense_data: data_reducer,
  view: toggle_view_reducer,
});

export default rootReducer;
