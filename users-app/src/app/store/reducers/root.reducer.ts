import { Action } from '@ngrx/store';
import * as fromActions from '../actions/counter.actions';

const initialState = {
  counter: 0,
};

export function rootReducer(
  state: { counter: number } = initialState,
  action: fromActions.CounterAction
) {
  switch (action.type) {
    case fromActions.INCREMENT:
      return {
        counter: state.counter + 1,
      };
    case fromActions.DECREMENT:
      return {
        counter: state.counter - 1,
      };
    case fromActions.ADD_COUNTER:
      return {
        counter : state.counter + action.value
      }
    default:
      return state;
  }
}
