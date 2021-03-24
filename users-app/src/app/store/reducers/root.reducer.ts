import { Action } from "@ngrx/store";

const initialState = {
  counter : 0
}

export function rootReducer(
  state: {counter : number} = initialState,
  action : Action){
    return state;
}
