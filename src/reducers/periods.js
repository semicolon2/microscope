import { combineReducers } from "redux";

function dragDropPeriod(periodIds, action) {
  const { startIndex, endIndex } = action.payload;
  let newPeriodIds = [...periodIds];
  const [removed] = newPeriodIds.splice(startIndex, 1);
  newPeriodIds.splice(endIndex, 0, removed);
  return newPeriodIds;
}

function dragDropEvent(periods, action) {
  const { startIndex, endIndex, periodId } = action.payload;
  let period = { ...periods[periodId] };
  const [removed] = period.events.splice(startIndex, 1);
  period.events.splice(endIndex, 0, removed);
  return { ...periods, [periodId]: period };
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
      return dragDropPeriod(state, action);
    default:
      return state;
  }
}

const periods = combineReducers({
  byId: periodsById,
  allIds: allPeriods
});

export default periods;
