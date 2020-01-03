import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MDBBootstrapModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import { MatFileUploadModule } from './angular-material-fileupload/';
import {MatSelectModule} from '@angular/material/select';

import { LoginComponent } from "./views/auth/login/login.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { FormsModule } from "@angular/forms";
import { httpInterceptorProviders } from './http-interceptors/index';
import { HeaderComponent } from './views/partials/header/header.component';
import { SidebarComponent } from './views/partials/sidebar/sidebar.component';
import { NewClientComponent } from './components/new-client/new-client.component';
import { NewDietitianComponent } from './components/new-dietitian/new-dietitian.component';
import { AllDetailsComponent } from './components/all-details/all-details.component';
import { NotesComponent } from './components/notes/notes.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { IssuesComponent } from './components/issues/issues.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ErrorViewComponent } from './components/error-view/error-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    NewClientComponent,
    NewDietitianComponent,
    AllDetailsComponent,
    NotesComponent,
    TasksComponent,
    IssuesComponent,
    CalendarComponent,
    InvoicesComponent,
    SettingsComponent,
    ErrorViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    // MatFileUploadModule,
    MatSelectModule,
    MDBBootstrapModule.forRoot(),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
