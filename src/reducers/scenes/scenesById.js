function dragScene(scenes, action) {
  const { sceneId } = action.payload;
  return { ...scenes, [sceneId]: { ...scenes[sceneId], dragging: true } };
}

function dropScene(scenes, action) {
  const { sceneId } = action.payload;
  return { ...scenes, [sceneId]: { ...scenes[sceneId], dragging: false } };
}

function addScene(events, action) {
  const { event } = action.payload;
  return {
    ...events,
    [event.id]: { ...event }
  };
}

function removeScene(events, action) {
  const { eventId } = action.payload;
  return ({ [eventId]: deleted, ...newScenes } = events) => newScenes;
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
    default:
      return state;
  }
}
