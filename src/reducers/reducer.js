import { combineReducers } from "redux";

import periods from "./periods";
import events from "./events";
import scenes from "./scenes";
import isDropDisabled from "./isDropDisabled";

const reducer = combineReducers({
  periods,
  events,
  scenes,
  isDropDisabled
});

export default reducer;
