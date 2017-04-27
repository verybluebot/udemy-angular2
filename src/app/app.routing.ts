import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'hamsters', loadChildren: './hamsters/hamsters.module#HamstersModule'},
  { path: 'shopping-list', component: ShopingListComponent },
  { path: 'signup', component:  SignupComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules});
