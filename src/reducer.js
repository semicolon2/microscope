
function dragDrop(state, list, startIndex, endIndex) {
  let newState = state;
  return newState;
}

export default function reducer(state, action) {
  switch(action.type) {
    case 'DRAG_DROP':
      dragDrop(state, ...action.payload);
      break;
    default:
      return state;
  }
}