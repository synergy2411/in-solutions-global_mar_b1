import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers : [DataService]
})
export class AppComponent {
  title = 'users-app';
  showUsers : boolean = true;
  
  constructor(public dataService : DataService){}

  onIncrement(){
    this.dataService.counter++;
  }

}
