const store = {
  state: { count: 0 },
  listeners: [],
};
store.getState = function () {
  return this.state;
};
