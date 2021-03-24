import { Action } from "@ngrx/store";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER";


export class onAddCounter implements Action{
  readonly type: string = ADD_COUNTER;
  constructor(public value : number){}
}

export type CounterAction = onAddCounter
