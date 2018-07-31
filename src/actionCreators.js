export function dragDropPeriod(payload) {
  return {
    type: "DRAG_DROP_PERIOD",
    payload: payload
  };
}

export function dragDropEvent(payload) {
  return {
    type: "DRAG_DROP_EVENT",
    payload: payload
  };
}

export function dragDropScene(payload) {
  return {
    type: "DRAG_DROP_SCENE",
    payload: payload
  };
}
