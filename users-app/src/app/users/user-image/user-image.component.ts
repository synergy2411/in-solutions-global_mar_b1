import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.css']
})
export class UserImageComponent {

  @Input() user : User;
  @Output() userEvent = new EventEmitter<User>();

  onbtnClick(user : User){
    this.userEvent.emit(user);
  }
}