import nanoid from "nanoid";

export function dropPeriod(payload) {
  return {
    type: "DROP_PERIOD",
    payload: payload
  };
}

export function dropEvent(payload) {
  return {
    type: "DROP_EVENT",
    payload: payload
  };
}

export function dropScene(payload) {
  return {
    type: "DROP_SCENE",
    payload: payload
  };
}

export function dragPeriod(payload) {
  return {
    type: "DRAG_PERIOD",
    payload: payload
  };
}

export function dragEvent(payload) {
  return {
    type: "DRAG_EVENT",
    payload: payload
  };
}

export function dragScene(payload) {
  return {
    type: "DRAG_SCENE",
    payload: payload
  };
}

export function addPeriod() {
  return {
    type: "ADD_PERIOD",
    payload: {
      id: "period-" + nanoid(10),
      text: "title",
      tone: "dark",
      dragging: false,
      events: []
    }
  };
}

export function addEvent(periodId) {
  return {
    type: "ADD_EVENT",
    payload: {
      id: "event-" + nanoid(10),
      periodId: periodId,
      title: "title",
      text: "description",
      tone: "dark",
      dragging: false,
      scenes: []
    }
  };
}

export function addScene(eventId) {
  return {
    type: "ADD_SCENE",
    payload: {
      id: "scene-" + nanoid(10),
      eventId: eventId,
      question: "question",
      text: "description",
      answer: "answer",
      tone: "dark",
      dragging: false
    }
  };
}

export function removePeriod(periodId) {
  return {
    type: "REMOVE_PERIOD",
    payload: periodId
  };
}

export function removeEvent(eventId) {
  return {
    type: "REMOVE_EVENT",
    payload: eventId
  };
}

export function removeScene(sceneId) {
  return {
    type: "REMOVE_SCENE",
    payload: sceneId
  };
}

export function updatePeriod(period) {
  return {
    type: "UPDATE_PERIOD",
    payload: period
  };
}

export function updateEvent(event) {
  return {
    type: "UPDATE_EVENT",
    payload: event
  };
}

export function updateScene(scene) {
  return {
    type: "UPDATE_SCENE",
    payload: scene
  };
}
