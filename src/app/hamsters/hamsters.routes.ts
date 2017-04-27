import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HamstersComponent } from './hamsters.component';
import { HamsterEditComponent } from './hamster-edit/hamster-edit.component';
import { HamsterDetailComponent } from './hamster-detail/hamster-detail.component';
import { HamsterStartComponent } from './hamster-start/hamster-start.component';

const HAMSTERS_ROUTES: Routes = [
  { path: '', component: HamstersComponent, children: [
    { path: '', component: HamsterStartComponent},
    { path: 'new', component: HamsterEditComponent },
    { path: ':id', component: HamsterDetailComponent },
    { path: ':id/edit', component: HamsterEditComponent }
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(HAMSTERS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class HamsterRoutes {}

