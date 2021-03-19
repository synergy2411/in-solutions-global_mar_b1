import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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

@NgModule({
  declarations: [         // Components | Directives | Pipes
    AppComponent, UsersComponent, 
    UserImageComponent, UserInfoComponent, HighlightDirective, 
    PipeDemoComponent, CountryCodePipe, FilterPipe, LoginComponent, 
    RegisterComponent, ObservableDemoComponent
  ],
  imports: [              // Modules - Built-in or Custom Module
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],          // Service - Register the Service with providers
  bootstrap: [AppComponent]
})
export class AppModule { }
