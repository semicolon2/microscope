function dragDropPeriod(state, startIndex, endIndex) {
  let newState = [...state];
  let [removed] = newState.splice(startIndex, 1);
  newState.splice(endIndex, 0, removed);
  return newState;
}

export default function periods(state = [], action) {
  switch (action.type) {
    case "DRAG_DROP_PERIOD":
      return dragDropPeriod(
        state,
        action.payload.startIndex,
        action.payload.endIndex
      );
    default:
      return state;
  }
}
