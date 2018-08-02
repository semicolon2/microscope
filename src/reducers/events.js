import { combineReducers } from "redux";

function dragDropScene(events, action) {
  const { startIndex, endIndex, eventId } = action.payload;
  let event = { ...events[eventId] };
  const [removed] = event.scenes.splice(startIndex, 1);
  event.scenes.splice(endIndex, 0, removed);
  return { ...events, event };
}

function eventsById(state = {}, action) {
  switch (action.type) {
    case "DRAG_DROP_SCENE":
      return dragDropScene(state, action);
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
