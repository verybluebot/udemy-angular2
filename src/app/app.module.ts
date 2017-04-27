import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingListAddComponent } from './shoping-list/shoping-list-add/shoping-list-add.component';
import { DropdwonDirective } from './directrivs/dropdwon.directive';
import { HamstersService } from './services/hamsters.service';
import { ShopingListService } from './services/shoping-list-service';
import { routing } from './app.routing';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopingListComponent,
    ShopingListAddComponent,
    DropdwonDirective,
    SignupComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
  ],
  providers: [HamstersService, ShopingListService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
