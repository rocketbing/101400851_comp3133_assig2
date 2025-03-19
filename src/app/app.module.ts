import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Needed for browser support
import { AppRoutingModule } from './app-routing.module'; // Your routing module
import { AppComponent } from './app.component'; // Your main app component
import { LoginComponent } from './login/login.component'; // Your login component
import { SignupComponent } from './signup/signup.component'; // Your signup component
import { EmployeeListComponent } from './employee-list/employee-list.component'; // Your employee list component

@NgModule({
  declarations: [
    AppComponent, // Root component
    LoginComponent,
    SignupComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule, // For running in browser
    AppRoutingModule // Routing setup
  ],
  providers: [],
  bootstrap: [AppComponent] // Root component to bootstrap
})
export class AppModule { }

