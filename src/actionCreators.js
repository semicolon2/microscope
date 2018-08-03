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
