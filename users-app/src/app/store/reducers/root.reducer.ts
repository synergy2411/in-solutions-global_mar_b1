import { Action } from '@ngrx/store';
import * as fromActions from '../actions/counter.actions';

const initialState = {
  counter: 0,
  result : []
};

export function rootReducer(
  state: { counter: number, result: Array<number> } = initialState,
  action: fromActions.CounterAction
) {
  switch (action.type) {
    case fromActions.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case fromActions.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case fromActions.ADD_COUNTER:
      return {
        ...state,
        counter : state.counter + action.value
      }
    case fromActions.SUBTRACT_COUNTER:
      return {
        ...state,
        counter : state.counter - action.value
      }
    case fromActions.STORE_RESULT:
      return {
        ...state,
        result : [...state.result, state.counter]
      }
    default:
      return state;
  }
}
