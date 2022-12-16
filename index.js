const redux = require("redux");
const CAKE_ODERED = "CAKE_ODERED";
const CAKE_RETURNED = "CAKE_RETURNED";
const ADD_TOPPINGS = "ADD_TOPPINGS";

const createStore = redux.createStore;

function orderCake() {
  return {
    type: CAKE_ODERED,
    quantity: 1,
  };
}

function returnCake() {
  return {
    type: CAKE_RETURNED,
    quantity: 1,
  };
}

function addToppings() {
  return {
    type: ADD_TOPPINGS,
    quantity: 1,
  };
}

const initialState = {
  noOfCakes: 10,
  flavor: "chocklate",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ODERED:
      return { ...state, noOfCakes: state.noOfCakes - 1 };

    case CAKE_RETURNED:
      return { ...state, noOfCakes: state.noOfCakes + 1 };

    case ADD_TOPPINGS:
      return {
        ...state,
        toppings: "Chocklate Chips",
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initail State", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("Store Updated", store.getState())
);

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(returnCake());
store.dispatch(returnCake());
store.dispatch(addToppings());

unsubscribe();
