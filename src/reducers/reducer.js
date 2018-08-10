import { combineReducers } from "redux";

import periods from "./periods/periods";
import events from "./events/events";
import scenes from "./scenes/scenes";

function deletable(state = false, action) {
  switch (action.type) {
    case "TOGGLE_DELETE":
      return state ? false : true;
    default:
      return state;
  }
}

const reducer = combineReducers({
  periods,
  events,
  scenes,
  deletable
});

export default reducer;
