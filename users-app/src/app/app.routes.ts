import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ObservableDemoComponent } from "./components/observable-demo/observable-demo.component";
import { PipeDemoComponent } from "./components/pipe-demo/pipe-demo.component";
import { RegisterComponent } from "./components/register/register.component";
import { UsersComponent } from "./users/users.component";

export const APP_ROUTES : Routes = [
  {
    path : "",                  // http://localhost:4200
    redirectTo : "/login",
    pathMatch : "full"
  },
  {
    path : "login",             // http://localhost:4200/login
    component : LoginComponent
  },{
    path : "register",          // http://localhost:4200/register
    component : RegisterComponent
  },{
    path : "users",             // http://localhost:4200/users
    component : UsersComponent
  },{
    path : "pipe-demo",         // http://localhost:4200/pipe-demo
    component : PipeDemoComponent
  },{
    path : "observable-demo",       // http://localhost:4200/observable-demo
    component : ObservableDemoComponent
  },{
    path : "**",              // http://localhost:4200/not-exist => /login
    redirectTo : "/login",
    pathMatch : "full"
  }
]