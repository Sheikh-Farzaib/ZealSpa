import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentComponent } from './dashboard/student/student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './welcome/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WelcomeComponent,
    StudentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
