import { Routes } from "@angular/router";
import { CounterComponent } from "./components/counter/counter.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { ObservableDemoComponent } from "./components/observable-demo/observable-demo.component";
import { PipeDemoComponent } from "./components/pipe-demo/pipe-demo.component";
import { OverviewComponent } from "./components/product/overview/overview.component";
import { ProductComponent } from "./components/product/product.component";
import { SpecificationComponent } from "./components/product/specification/specification.component";
import { RegisterComponent } from "./components/register/register.component";
import { LoginGaurdService } from "./services/login-gaurd.service";
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
    component : UsersComponent,
    canActivate : [LoginGaurdService]
  },{
    path : "pipe-demo",         // http://localhost:4200/pipe-demo
    component : PipeDemoComponent
  },{
    path : "observable-demo",       // http://localhost:4200/observable-demo
    component : ObservableDemoComponent
  },{
    path : "product",
    component : ProductComponent,
    children : [
      {
        path : "overview/:id/:name",
        component : OverviewComponent
      },{
        path : "specification",
        component : SpecificationComponent
      }
    ]
  },{
    path : "lazy",
    loadChildren : () => import("./modules/lazy/lazy.module").then(m => m.LazyModule)
  },{
    path : "logout",
    component : LogoutComponent
  },{
    path : "counter",
    component : CounterComponent
  },{
    path : "**",              // http://localhost:4200/not-exist => /login
    redirectTo : "/login",
    pathMatch : "full"
  }
]
