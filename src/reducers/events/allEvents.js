function addEvent(events, action) {
  const eventId = action.payload.id;
  return events.concat(eventId);
}

function removeEvent(events, action) {
  const { eventId } = action.payload;
  return events.filter(event => event !== eventId);
}

export default function allEvents(state = [], action) {
  switch (action.type) {
    case "ADD_EVENT":
      return addEvent(state, action);
    case "REMOVE_EVENT":
      return removeEvent(state, action);
    default:
      return state;
  }
}
