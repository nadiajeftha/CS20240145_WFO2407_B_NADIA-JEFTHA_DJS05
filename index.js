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
  }
};
