//created store object
const store = {
  state: { count: 0 },
  listeners: [],
};
//to get current state
store.getState = function () {
  return this.state;
};
//for dispatching actions(adding,subtracting & resetting)
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
  //telling listeners state change info
  this.listeners.forEach((listener) => listener(this.state));
};
//subscribing listener to state change
store.subscribe = function (listener) {
  this.listeners.push(listener);
};
//logging latest count dispatched
store.subscribe((state) => {
  console.log(state.count);
});
