function dragDropScene(state, startIndex, endIndex) {
  let newState = [...state];
  let [removed] = newState.splice(startIndex, 1);
  newState.splice(endIndex, 0, removed);
  return newState;
}

export default function scenes(state = [], action) {
  switch (action.type) {
    case "DRAG_DROP_SCENE":
      return dragDropScene(
        state,
        action.payload.startIndex,
        action.payload.endIndex
      );
    default:
      return state;
  }
}
