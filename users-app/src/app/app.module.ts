import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from './modules/employee/employee.module';
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PipeDemoComponent } from './components/pipe-demo/pipe-demo.component';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DataService } from './services/data.service';
import { ObservableDemoComponent } from './components/observable-demo/observable-demo.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { LoggerInterceptorService } from './services/logger-interceptor.service';
import { APP_ROUTES } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { OverviewComponent } from './components/product/overview/overview.component';
import { SpecificationComponent } from './components/product/specification/specification.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { rootReducer } from "./store/reducers/root.reducer";
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [         // Components | Directives | Pipes
    AppComponent, UsersComponent,
    UserImageComponent, UserInfoComponent, HighlightDirective,
    PipeDemoComponent, CountryCodePipe, FilterPipe, LoginComponent,
    RegisterComponent, ObservableDemoComponent, HeaderComponent, ProductComponent,
    OverviewComponent, SpecificationComponent, LogoutComponent, CounterComponent
  ],
  imports: [              // Modules - Built-in or Custom Module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmployeeModule,
    StoreModule.forRoot({
      root : rootReducer,
      // result : resultReducer
    }),
    StoreDevtoolsModule.instrument({logOnly : environment.production}),
    RouterModule.forRoot(APP_ROUTES),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [DataService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorService,
      multi : true
    },{
      provide : HTTP_INTERCEPTORS,
      useClass : LoggerInterceptorService,
      multi : true
    }
  ],          // Service - Register the Service with providers
  bootstrap: [AppComponent]
})
export class AppModule { }
