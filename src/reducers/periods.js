import { combineReducers } from "redux";

function dragDropPeriod(periodState, startIndex, endIndex) {
  let allIds = [...periodState.allIds];
  let [removed] = allIds.splice(startIndex, 1);
  allIds.splice(endIndex, 0, removed);
  return { ...periodState, allIds };
}

function dragDropEvent(periods, action) {
  const { startIndex, endIndex, periodId } = action.payload;
  let period = { ...periods[periodId] };
  const [removed] = period.events.splice(startIndex, 1);
  period.events.splice(endIndex, 0, removed);
  return { ...periods, period };
}

function periodsById(state = {}, action) {
  switch (action.type) {
    case "DRAG_DROP_EVENT":
      return dragDropEvent(state, action);
    default:
      return state;
  }
}

function allPeriods(state = [], action) {
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

const periods = combineReducers({
  byId: periodsById,
  allIds: allPeriods
});

export default periods;
