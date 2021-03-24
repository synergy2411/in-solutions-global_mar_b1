import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromActions from '../../store/actions/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter : number;
  counterResults : Array<number> = [];

  constructor(private store : Store<{counter : number}>) { }

  ngOnInit(): void {
    this.store.subscribe(data => {
      this.counter = data['root'].counter;
      console.log(data['root']);
      this.counterResults = data["root"].result;
    })
  }

  onIncrease(){
    this.store.dispatch({type : fromActions.INCREMENT})
  }

  onDecrease(){
    this.store.dispatch({type : fromActions.DECREMENT})
  }

  onAdd(value : number){
    // this.store.dispatch({type : fromActions.ADD_COUNTER, value })
    this.store.dispatch(new fromActions.onAddCounter(value))
  }

  onSubtract(value : number){
    this.store.dispatch(new fromActions.onSubtractCounter(value))
  }

  onStoreResult(){
    this.store.dispatch(new fromActions.onStoreResult(0))
  }
}
