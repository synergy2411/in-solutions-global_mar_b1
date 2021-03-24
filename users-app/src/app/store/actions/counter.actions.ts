import { Action } from "@ngrx/store";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBTRACT_COUNTER = "SUBTRACT_COUNTER";
export const STORE_RESULT = "STORE_RESULT";

export class onStoreResult implements Action{
  readonly type: string = STORE_RESULT;
  constructor(public value : number){
    console.log("[STORE RESULT]")
  }
}

export class onAddCounter implements Action{
  readonly type: string = ADD_COUNTER;
  constructor(public value : number){}
}

export class onSubtractCounter implements Action{
  readonly type : string = SUBTRACT_COUNTER;
  constructor(public value : number){}
}

export type CounterAction = onAddCounter | onSubtractCounter | onStoreResult
