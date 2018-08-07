function dropScene(events, action) {
  const { startIndex, endIndex, eventId } = action.payload;
  let event = { ...events[eventId] };
  const [removed] = event.scenes.splice(startIndex, 1);
  event.scenes.splice(endIndex, 0, removed);
  return { ...events, [eventId]: event };
}

function dragEvent(events, action) {
  const { eventId } = action.payload;
  return {
    ...events,
    [eventId]: { ...events[eventId], dragging: true }
  };
}

function dropEvent(events, action) {
  const { eventId } = action.payload;
  return {
    ...events,
    [eventId]: { ...events[eventId], dragging: false }
  };
}

function addEvent(events, action) {
  const { event } = action.payload;
  return {
    ...events,
    [event.id]: { ...event }
  };
}

function removeEvent(events, action) {
  const { eventId } = action.payload;
  return ({ [eventId]: deleted, ...newEvents } = events) => newEvents;
}

function addScene(events, action) {
  const { eventId, scene } = action.payload;
  const event = events[eventId];
  return {
    ...events,
    [eventId]: { ...event, scenes: event.scenes.concat(scene.id) }
  };
}

function removeScene(events, action) {
  const { eventId, sceneId } = action.payload;
  const event = events[eventId];
  return {
    ...events,
    [eventId]: { ...event, scenes: scenes.filter(scene => scene !== sceneId) }
  };
}

function updateEvent(events, action) {
  const event = action.payload;
  return {
    ...events,
    [event.id]: { ...events[event.id], ...event }
  };
}

export default function eventsById(state = {}, action) {
  switch (action.type) {
    case "DROP_SCENE":
      return dropScene(state, action);
    case "DRAG_EVENT":
      return dragEvent(state, action);
    case "DROP_EVENT":
      return dropEvent(state, action);
    case "ADD_EVENT":
      return addEvent(state, action);
    case "REMOVE_EVENT":
      return removeEvent(state, action);
    case "ADD_SCENE":
      return addScene(state, action);
    case "REMOVE_SCENE":
      return removeScene(state, action);
    case "UPDATE_EVENT":
      return updateEvent(state, action);
    default:
      return state;
  }
}
