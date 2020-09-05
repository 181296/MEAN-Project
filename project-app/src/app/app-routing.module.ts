import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { HomeComponent } from './home/home.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { MenuDominosComponent } from './menu-dominos/menu-dominos.component';
import { PuneComponent } from './pune/pune.component';
import { SataraComponent } from './satara/satara.component';
import { MenuMacdyComponent } from './menu-macdy/menu-macdy.component';
import { MenuCcdComponent } from './menu-ccd/menu-ccd.component';
import { MenuAmrapaliComponent } from './menu-amrapali/menu-amrapali.component';
import { BhilaiComponent } from './bhilai/bhilai.component';
import { MenuDhillonComponent } from './menu-dhillon/menu-dhillon.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgotpwd', component: ForgotpwdComponent },
  { path: 'resetpwd', component: ResetpwdComponent },
  
  {path: 'home', component: HomeComponent},
  { path: 'mumbai', component: MumbaiComponent},
  { path: 'menu-dominos', component: MenuDominosComponent},
  { path: 'pune', component: PuneComponent},
  { path: 'satara', component: SataraComponent},
  { path: 'menu-macdy', component: MenuMacdyComponent},
  { path: 'menu-ccd', component: MenuCcdComponent },  
  { path: 'menu-amrapali', component: MenuAmrapaliComponent },  
  { path: 'bhilai', component: BhilaiComponent },  
  { path: 'menu-dhillon', component: MenuDhillonComponent },  
  
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: '**', component: PagenotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
