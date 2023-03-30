import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatApplicationComponent } from './chat-application/chat-application.component';
import { ChatWithContactComponent } from './chat-with-contact/chat-with-contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OptGenerationComponent } from './opt-generation/opt-generation.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path:'',component:NavBarComponent},
  {path:'search',component:SearchComponent},
  {path:'register',component:RegistrationFormComponent},
  {path:'login',component:LoginFormComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'otp',component:OptGenerationComponent},
  {path:'resetPassword',component:ResetPasswordComponent},
  {path:'login',component:LoginFormComponent},
  {path:'chatApplication',component:ChatApplicationComponent},
  {path:'chatWithContact',component:ChatWithContactComponent},
  {path:'contact',component:ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
