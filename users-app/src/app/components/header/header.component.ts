import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tab : number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  isSelected(tabSelected){
    return this.tab === tabSelected;
  }

  selectTab(tab){
    this.tab = tab;
  }


}
