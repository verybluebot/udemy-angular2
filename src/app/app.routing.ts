import { Routes, RouterModule } from '@angular/router';
import { HamstersComponent } from './hamsters/hamsters.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { HAMSTERS_ROUTES } from './hamsters/hamsters.routes';

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'hamsters', pathMatch: 'full' },
  { path: 'hamsters', component: HamstersComponent, children: HAMSTERS_ROUTES },
  { path: 'shopping-list', component: ShopingListComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
