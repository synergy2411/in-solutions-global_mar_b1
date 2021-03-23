import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IAmLazyComponent } from './components/i-am-lazy/i-am-lazy.component';
import { RouterModule, Routes } from '@angular/router';
import { OnDemandComponent } from './components/on-demand/on-demand.component';

const LAZY_ROUTES : Routes = [
  {
    path : "",      // http://localhost:4200/lazy
    component : IAmLazyComponent
  },{
    path : "on-demand",       // http://localhost:4200/lazy/on-demand
    component : OnDemandComponent
  }
]

@NgModule({
  declarations: [IAmLazyComponent, OnDemandComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_ROUTES)
  ]
})
export class LazyModule { }
