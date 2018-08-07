import { combineReducers } from "redux";

import periods from "./periods/periods";
import events from "./events/events";
import scenes from "./scenes/scenes";

const reducer = combineReducers({
  periods,
  events,
  scenes
});

export default reducer;
