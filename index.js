const store = {
  state: { count: 0 },
};
store.getState = function () {
  return state;
};
console.log(store.getState());
