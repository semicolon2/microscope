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

function room(state = "", action) {
  switch (action.type) {
    case "UPDATE_ROOM":
      return action.payload.roomId;
    default:
      return state;
  }
}

const cards = combineReducers({
  periods,
  events,
  scenes
});

const reducer = combineReducers({
  cards,
  room,
  deletable
});

export default reducer;
