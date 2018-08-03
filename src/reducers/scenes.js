import { combineReducers } from "redux";

function dragScene(scenes, action) {
  const { sceneId } = action.payload;
  return { ...scenes, [sceneId]: { ...scenes[sceneId], dragging: true } };
}

function dropScene(scenes, action) {
  const { sceneId } = action.payload;
  return { ...scenes, [sceneId]: { ...scenes[sceneId], dragging: false } };
}

function scenesById(state = {}, action) {
  switch (action.type) {
    case "DRAG_SCENE":
      return dragScene(state, action);
    case "DROP_SCENE":
      return dropScene(state, action);
    default:
      return state;
  }
}

function allScenes(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

const scenes = combineReducers({
  byId: scenesById,
  allIds: allScenes
});

export default scenes;
