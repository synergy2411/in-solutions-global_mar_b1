import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewEmployeeComponent } from './new-employee/new-employee.component';



@NgModule({
  declarations: [NewEmployeeComponent],
  imports: [
    CommonModule
  ],
  exports : [NewEmployeeComponent]
})
export class EmployeeModule { }
