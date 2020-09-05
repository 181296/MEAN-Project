        // In-Built and External Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';                     //To works with Bootstrap  
import { ReactiveFormsModule } from '@angular/forms';                       //To works with forms
import { HttpClientModule } from '@angular/common/http';                    //To works with Ajax / Http / API

        // User Defined Module
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpwdComponent } from './forgotpwd/forgotpwd.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { HomeComponent } from './home/home.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { BhilaiComponent } from './bhilai/bhilai.component';
import { MenuDominosComponent } from './menu-dominos/menu-dominos.component';
import { PuneComponent } from './pune/pune.component';
import { SataraComponent } from './satara/satara.component';
import { MenuMacdyComponent } from './menu-macdy/menu-macdy.component';
import { MenuCcdComponent } from './menu-ccd/menu-ccd.component';
import { MenuAmrapaliComponent } from './menu-amrapali/menu-amrapali.component';
import { MenuDhillonComponent } from './menu-dhillon/menu-dhillon.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpwdComponent,
    PagenotfoundComponent,
    ResetpwdComponent,
    HomeComponent,
    MumbaiComponent,
    MenuDominosComponent,
    PuneComponent,
    SataraComponent,
    MenuMacdyComponent,
    MenuCcdComponent,
    MenuAmrapaliComponent,
    BhilaiComponent,
    MenuDhillonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
