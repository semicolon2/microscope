import { combineReducers } from "redux";

function reorderPeriod(periodIds, action) {
  const { startIndex, endIndex } = action.payload;
  let newPeriodIds = [...periodIds];
  const [removed] = newPeriodIds.splice(startIndex, 1);
  newPeriodIds.splice(endIndex, 0, removed);
  return newPeriodIds;
}

function reorderEvent(periods, action) {
  const { startIndex, endIndex, periodId } = action.payload;
  let period = { ...periods[periodId] };
  const [removed] = period.events.splice(startIndex, 1);
  period.events.splice(endIndex, 0, removed);
  return { ...periods, [periodId]: period };
}

function periodDropped(periods, action) {
  const { periodId } = action.payload;
  return { ...periods, [periodId]: { ...periods[periodId], dragging: false } };
}

function periodDragged(periods, action) {
  const { periodId } = action.payload;
  return { ...periods, [periodId]: { ...periods[periodId], dragging: true } };
}

function periodsById(state = {}, action) {
  switch (action.type) {
    case "DROP_EVENT":
      return reorderEvent(state, action);
    case "DROP_PERIOD":
      return periodDropped(state, action);
    case "DRAG_PERIOD":
      return periodDragged(state, action);
    default:
      return state;
  }
}

function allPeriods(state = [], action) {
  switch (action.type) {
    case "DROP_PERIOD":
      return reorderPeriod(state, action);
    default:
      return state;
  }
}

const periods = combineReducers({
  byId: periodsById,
  allIds: allPeriods
});

export default periods;
