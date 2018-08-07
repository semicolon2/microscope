import { combineReducers } from "redux";

import scenesById from "./scenesById";
import allScenes from "./allScenes";

const scenes = combineReducers({
  byId: scenesById,
  allIds: allScenes
});

export default scenes;
