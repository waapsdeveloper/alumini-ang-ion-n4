import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { NAuthGuard } from '../guards/nauth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate: [NAuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule),
    canActivate: [NAuthGuard]
  },
  {
    path: 'dl',
    loadChildren: () => import('./dol-layout/dol-layout.module').then( m => m.DolLayoutPageModule),
    canActivate: [AuthGuard],

  },
  {
    path: 'user-aggrement',
    loadChildren: () => import('./user-aggrement/user-aggrement.module').then( m => m.UserAggrementPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
