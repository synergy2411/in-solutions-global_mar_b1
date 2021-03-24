import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counter : number;
  constructor(private store : Store<{counter : number}>) { }

  ngOnInit(): void {
    // console.log(this.store)
    this.store.subscribe(data => {
      // console.log(data);
      this.counter = data['root'].counter;
    })
  }

}
