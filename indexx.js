const redux = require("redux");
const produce = require("immer").produce;
const createStore = redux.createStore;

const ORDER_PIZZA = "ORDER_PIZZA";
const RETURN_PIZZA = "RETURN_PIZZA";
const ADD_TOPPINGS = "ADD_TOPPINGS";
const RESTOCK_PIZZA = "RESTOCK_PIZZA";
const ORDER_MILKSHAKE = "ORDER_MILKSHAKE";
const RETURN_MILKSHAKE = "RETURN_MILKSHAKE";
const RESTOCK_MILKSHAKE = "RESTOCK_MILKSHAKE";

function orderPizza() {
  return {
    type: ORDER_PIZZA,
    quantity: 1,
  };
}

function returnPizza() {
  return {
    type: RETURN_PIZZA,
    quantity: 1,
  };
}

function addToppings() {
  return {
    type: ADD_TOPPINGS,
  };
}

function restockPizza(quantity) {
  return {
    type: "RESTOCK_PIZZA",
    payload: quantity,
  };
}

function orderMilkshake(quantity) {
  return {
    type: "ORDER_MILKSHAKE",
    payload: quantity,
  };
}

function returnMilkshake(quantity) {
  return {
    type: "RETURN_MILKSHAKE",
    payload: quantity,
  };
}

function restockMilkshake(quantity) {
  return {
    type: "RESTOCK_MILKSHAKE",
    payload: quantity,
  };
}

const initialState = {
  noOfPizza: 10,
  flavor: "Magreta",
  noOfMilkshake: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_PIZZA:
      return {
        ...state,
        noOfPizza: state.noOfPizza - 1,
      };
    case RETURN_PIZZA:
      return {
        ...state,
        noOfPizza: state.noOfPizza + 1,
      };
    case ADD_TOPPINGS:
      return {
        ...state,
        Toppings: "Pepperoni",
        noOfPizza: state.noOfPizza + 1,
      };

    case RESTOCK_PIZZA:
      return {
        ...state,
        noOfPizza: state.noOfPizza + action.payload,
      };
    case ORDER_MILKSHAKE:
      return {
        ...state,
        noOfMilkshake: state.noOfMilkshake - 1,
      };
    case RETURN_MILKSHAKE:
      return {
        ...state,
        noOfMilkshake: state.noOfMilkshake + 1,
      };

    case RESTOCK_MILKSHAKE:
      return {
        ...state,
        noOfMilkshake: state.noOfMilkshake + action.payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial Menu", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Menu Updated", store.getState());
});

store.dispatch(orderPizza());
store.dispatch(orderMilkshake());
store.dispatch(orderPizza());
store.dispatch(returnPizza());
store.dispatch(orderPizza());
store.dispatch(addToppings());
store.dispatch(orderMilkshake());
store.dispatch(orderMilkshake());
store.dispatch(orderMilkshake(7));
store.dispatch(restockPizza(7));
store.dispatch(returnMilkshake());
store.dispatch(restockMilkshake(5));
unsubscribe();
