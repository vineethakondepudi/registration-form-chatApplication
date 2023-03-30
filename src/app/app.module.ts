import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { OptGenerationComponent } from './opt-generation/opt-generation.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChatApplicationComponent } from './chat-application/chat-application.component';
import{HttpClientModule}from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChatAppComponent } from './component/chat-app/chat-app.component';
import { ChatInputComponent } from './component/chat-input/chat-input.component';
import { ChatNamePopupComponent } from './component/chat-name-popup/chat-name-popup.component';
import { ChatWindowComponent } from './component/chat-window/chat-window.component';
import { MessageComponent } from './component/message/message.component';
import { ChatListComponent } from './component/chat-list/chat-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatWithContactComponent } from './chat-with-contact/chat-with-contact.component'; // Import the FormsModule here

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginFormComponent,
    OptGenerationComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ChatApplicationComponent,
    RegistrationFormComponent,
    ChatAppComponent,
    ChatInputComponent,
    ChatNamePopupComponent,
    ChatWindowComponent,
    MessageComponent,
    ChatListComponent,
    SearchComponent,
    ContactsComponent,
    ChatWithContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ToastrModule,
    MatSnackBarModule,
    MatToolbarModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
