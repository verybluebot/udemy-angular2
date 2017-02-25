import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HamstersComponent } from './hamsters/hamsters.component';
import { HamsterListComponent } from './hamsters/hamster-list/hamster-list.component';
import { HamsterItemComponent } from './hamsters/hamster-list/hamster-item/hamster-item.component';
import { HamsterDetailComponent } from './hamsters/hamster-detail/hamster-detail.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingListAddComponent } from './shoping-list/shoping-list-add/shoping-list-add.component';
import { DropdwonDirective } from './directrivs/dropdwon.directive';
import { HamstersService } from './services/hamsters.service';
import { ShopingListService } from './services/shoping-list-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HamstersComponent,
    HamsterListComponent,
    HamsterItemComponent,
    HamsterDetailComponent,
    ShopingListComponent,
    ShopingListAddComponent,
    DropdwonDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HamstersService, ShopingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
