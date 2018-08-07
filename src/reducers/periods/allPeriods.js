function reorderPeriod(periodIds, action) {
  const { startIndex, endIndex } = action.payload;
  let newPeriodIds = [...periodIds];
  const [removed] = newPeriodIds.splice(startIndex, 1);
  newPeriodIds.splice(endIndex, 0, removed);
  return newPeriodIds;
}

function addPeriod(periodIds, action) {
  const { period } = action.payload;
  return periodIds.concat(period.id);
}

function removePeriod(periodIds, action) {
  const { periodId } = action.payload;
  return periodIds.filter(period => period !== periodId);
}

export default function allPeriods(state = [], action) {
  switch (action.type) {
    case "DROP_PERIOD":
      return reorderPeriod(state, action);
    case "ADD_PERIOD":
      return addPeriod(state, action);
    case "REMOVE_PERIOD":
      return removePeriod(state, action);
    default:
      return state;
  }
}
