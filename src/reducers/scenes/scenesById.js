function dragScene(scenes, action) {
  const { sceneId } = action.payload;
  return { ...scenes, [sceneId]: { ...scenes[sceneId], dragging: true } };
}

function dropScene(scenes, action) {
  const { sceneId } = action.payload;
  return { ...scenes, [sceneId]: { ...scenes[sceneId], dragging: false } };
}

function addScene(scenes, action) {
  const { scene } = action.payload;
  return {
    ...scenes,
    [scene.id]: { ...scene }
  };
}

function removeScene(scenes, action) {
  const { sceneId } = action.payload;
  return ({ [sceneId]: deleted, ...newScenes } = scenes) => newScenes;
}

function updateScene(scenes, action) {
  const scene = action.payload;
  return {
    ...scenes,
    [scene.id]: { ...scenes[scene.id], ...scene }
  };
}

export default function scenesById(state = {}, action) {
  switch (action.type) {
    case "DRAG_SCENE":
      return dragScene(state, action);
    case "DROP_SCENE":
      return dropScene(state, action);
    case "ADD_SCENE":
      return addScene(state, action);
    case "REMOVE_SCENE":
      return removeScene(state, action);
    case "UPDATE_SCENE":
      return updateScene(state, action);
    default:
      return state;
  }
}
