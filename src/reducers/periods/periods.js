import { combineReducers } from "redux";

import periodsById from "./periodsById";
import allPeriods from "./allPeriods";

const periods = combineReducers({
  byId: periodsById,
  allIds: allPeriods
});

export default periods;
