import { combineReducers } from "redux";

import eventsById from "./eventsById";
import allEvents from "./allEvents";

const events = combineReducers({
  byId: eventsById,
  allIds: allEvents
});

export default events;
