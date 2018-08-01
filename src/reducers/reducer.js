import { combineReducers } from "redux";

import periods from "./periods";
import events from "./events";
import scenes from "./scenes";

const reducer = combineReducers({
  periods,
  events,
  scenes
});

export default reducer;
