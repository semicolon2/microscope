import { addEvent } from "../../actionCreators";

function reorderEvent(periods, action) {
  const { startIndex, endIndex, periodId } = action.payload;
  let period = { ...periods[periodId] };
  const [removed] = period.events.splice(startIndex, 1);
  period.events.splice(endIndex, 0, removed);
  return { ...periods, [periodId]: period };
}

function periodDropped(periods, action) {
  const { periodId } = action.payload;
  return {
    ...periods,
    [periodId]: { ...periods[periodId], dragging: false }
  };
}

function periodDragged(periods, action) {
  const { periodId } = action.payload;
  return {
    ...periods,
    [periodId]: { ...periods[periodId], dragging: true }
  };
}

function addPeriod(periods, action) {
  const period = action.payload;
  return {
    ...periods,
    [period.id]: { ...period }
  };
}

function removePeriod(periods, action) {
  const { periodId } = action.payload;
  return ({ [periodId]: deleted, ...newPeriods } = periods) => newPeriods;
}

function addEvent(periods, action) {
  const { periodId, event } = action.payload;
  const period = periods[periodId];
  return {
    ...periods,
    [periodId]: { ...period, events: period.events.concat(event.id) }
  };
}

function removeEvent(periods, action) {
  const { periodId, eventId } = action.payload;
  const period = periods[periodID];
  return {
    ...periods,
    [periodId]: {
      ...period,
      events: period.events.filter(event => event !== eventId)
    }
  };
}

export default function periodsById(state = {}, action) {
  switch (action.type) {
    case "DROP_EVENT":
      return reorderEvent(state, action);
    case "DROP_PERIOD":
      return periodDropped(state, action);
    case "DRAG_PERIOD":
      return periodDragged(state, action);
    case "ADD_PERIOD":
      return addPeriod(state, action);
    case "REMOVE_PERIOD":
      return removePeriod(state, action);
    case "ADD_EVENT":
      return addEvent(state, action);
    case "REMOVE_EVENT":
      return removeEvent(state, action);
    default:
      return state;
  }
}
