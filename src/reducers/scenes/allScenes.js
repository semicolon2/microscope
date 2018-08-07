function addScene(scenes, action) {
  const { sceneId } = action.payload;
  return scenes.concat(sceneId);
}

function removeScene(scenes, action) {
  const { sceneId } = action.payload;
  return scenes.filter(scene => scene !== sceneId);
}

export default function allScenes(state = [], action) {
  switch (action.type) {
    case "ADD_SCENE":
      return addScene(state, action);
    case "REMOVE_SCENE":
      return removeScene(state, action);
    default:
      return state;
  }
}
