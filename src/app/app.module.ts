import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TermsAndConditionsComponent,
    PageNotFoundComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {path : '', component : LoginComponent},
      {path : 'terms-and-conditions', component : TermsAndConditionsComponent},
      {path : 'privacy-policy', component : PrivacyPolicyComponent},
      {path : 'signup', component : SignupComponent},
      {path : 'login', component : LoginComponent},
      {path : '**', component : PageNotFoundComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
