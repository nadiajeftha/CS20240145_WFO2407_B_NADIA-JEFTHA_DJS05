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
      break
    case "SUBSTRACT":
      this.state = { count: this.state.count - 1 };
      break
    case "RESET":
      this.state = { count: 0 };
      break
      default
      break
  }
};
