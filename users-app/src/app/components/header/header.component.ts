import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  tab : number = 1;

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }

  isSelected(tabSelected){
    return this.tab === tabSelected;
  }

  selectTab(tab){
    this.tab = tab;
  }


}
