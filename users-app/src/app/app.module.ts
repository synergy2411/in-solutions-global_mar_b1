import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [         // Components | Directives | Pipes
    AppComponent, UsersComponent
  ],
  imports: [              // Modules - Built-in or Custom Module
    BrowserModule
  ],
  providers: [],          // Service - Register the Service with providers
  bootstrap: [AppComponent]
})
export class AppModule { }
