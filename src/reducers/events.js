import { combineReducers } from "redux";

function dropScene(events, action) {
  const { startIndex, endIndex, eventId } = action.payload;
  let event = { ...events[eventId] };
  const [removed] = event.scenes.splice(startIndex, 1);
  event.scenes.splice(endIndex, 0, removed);
  return { ...events, [eventId]: event };
}

function dragEvent(events, action) {
  const { eventId } = action.payload;
  return { ...events, [eventId]: { ...events[eventId], dragging: true } };
}

function dropEvent(events, action) {
  const { eventId } = action.payload;
  return { ...events, [eventId]: { ...events[eventId], dragging: false } };
}

function eventsById(state = {}, action) {
  switch (action.type) {
    case "DROP_SCENE":
      return dropScene(state, action);
    case "DRAG_EVENT":
      return dragEvent(state, action);
    case "DROP_EVENT":
      return dropEvent(state, action);
    default:
      return state;
  }
}

function allEvents(state = [], action) {
  switch (action.type) {
    default:
      return state;
  }
}

const events = combineReducers({
  byId: eventsById,
  allIds: allEvents
});

export default events;
