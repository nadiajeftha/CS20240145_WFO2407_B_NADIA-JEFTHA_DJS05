const store = {
  state: { count: 0 },
  listeners: [],
};
store.getState = function () {
  return this.state;
};
store.dispatch = function (action) {
  switch (action.type) {
    case "ADD":
      this.state = { count: this.state.count + 1 };
      break;
    case "SUBTRACT":
      this.state = { count: this.state.count - 1 };
      break;
    case "RESET":
      this.state = { count: 0 };
      break;
    default:
      break;
  }
  this.listeners.forEach((listener) => listener(this.state));
};
store.subscribe = function (listener) {
  this.listeners.push(listener);
};
store.subscribe((state) => {
  console.log(state.count);
});
