import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserImageComponent } from './users/user-image/user-image.component';
import { UserInfoComponent } from './users/user-info/user-info.component';

@NgModule({
  declarations: [         // Components | Directives | Pipes
    AppComponent, UsersComponent, 
    UserImageComponent, UserInfoComponent
  ],
  imports: [              // Modules - Built-in or Custom Module
    BrowserModule,
    FormsModule
  ],
  providers: [],          // Service - Register the Service with providers
  bootstrap: [AppComponent]
})
export class AppModule { }
