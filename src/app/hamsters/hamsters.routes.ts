import { Routes } from '@angular/router';
import { HamsterEditComponent } from './hamster-edit/hamster-edit.component';
import { HamsterDetailComponent } from './hamster-detail/hamster-detail.component';
import { HamsterStartComponent } from './hamster-start/hamster-start.component';

export const HAMSTERS_ROUTES: Routes = [
  { path: '', component: HamsterStartComponent},
  { path: 'new', component: HamsterEditComponent },
  { path: ':id', component: HamsterDetailComponent },
  { path: ':id/edit', component: HamsterEditComponent }
];
