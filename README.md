# Tally App:Redux-inspired store

## How to run code:

1. **Clone the repository**
2. **Open the "index.js" file in a any JavaScript engine(browser or Node.js)**
3. **Dispatch actions in console**
   store.subscribe((state) =>console.log(state.count))
   store.dispatch({ type: "ADD"})
   store.dispatch({ type: "ADD"})
   store.dispatch({ type: "SUBTRACT"})
   store.dispatch({ type: "RESET"})

## Brief Overview :

Redux-inspired store to manage a simple counter's state.The store holds the current state and an array of listeners that respond to state changes.
Three core methods: getState(), dispatch(action),subscribe(listener)

## Challenges faced and overcame:

1.I was trying to log the results of dispatching actions. The `dispatch()` method does not return anything, so I used the `subscribe()` method to log the state updates.
2.First the state was mutable.
I had to make sure the state is updated immutably(craeting a new state object every time) to keep state management clean .
