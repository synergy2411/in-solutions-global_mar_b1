import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css'],
})
export class PipeDemoComponent implements OnInit {
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Here the data comes...');
    }, 3000);
  });

  contact_number : number = 987654321;

  todoList = [
    {label : "buy the pulses", status : "done"},
    {label : "buy the jeans", status : "pending"},
    {label : "pot the plants", status : "done"},
    {label : "renew car insurance", status : "pending"}
  ]

  filteredStatus : string = '';
  
  onAddItem(){
    this.todoList.push({label : "New Item", status : "pending"});
    // this.todoList = []
  }

  constructor() {}

  ngOnInit(): void {}
}
