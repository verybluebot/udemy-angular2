import { NgModule } from '@angular/core';

import { HamsterListComponent } from './hamster-list/hamster-list.component';
import { HamsterItemComponent } from './hamster-list/hamster-item/hamster-item.component';
import { HamsterDetailComponent } from './hamster-detail/hamster-detail.component';
import { HamstersComponent } from './hamsters.component';
import { HamsterEditComponent } from './hamster-edit/hamster-edit.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HamsterStartComponent } from './hamster-start/hamster-start.component';
import { DropdwonDirective } from '../directrivs/dropdwon.directive';
import { HamsterRoutes } from './hamsters.routes';

@NgModule({
  declarations: [
    HamstersComponent,
    HamsterEditComponent,
    HamsterListComponent,
    HamsterItemComponent,
    HamsterDetailComponent,
    HamsterStartComponent,
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    HamsterRoutes
  ]
})

export class HamstersModule {}
