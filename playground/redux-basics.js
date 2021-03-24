const redux = require("redux");

// Reducers
const initialState = {
    counter : 0
}
function myReducer(state = initialState, action){
    if(action.type === "INCREMENT"){
        // return state.counter = state.counter + 1
        return {
            counter : state.counter + 1
        }
    } else if(action.type === "DECREMENT"){
        return {
            counter : state.counter - 1
        }
    } else if(action.type === "ADD_COUNTER"){
        return {
            counter : state.counter + action.value
        }
    }
    return state;
}

// Store - getState() | dispatch(action) | subscribe
const store = redux.createStore(myReducer);

store.subscribe(() => {
    console.log("[STATE]", store.getState());
})



// Actions
store.dispatch({type : "INCREMENT"})
// console.log("[INCREMENT - ACTION]", store.getState());
store.dispatch({type : "DECREMENT"})
// console.log("[DECREMENT - ACTION]", store.getState());
store.dispatch({type : "ADD_COUNTER", value : 10})