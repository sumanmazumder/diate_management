import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  MDBBootstrapModule,
  WavesModule,
  ButtonsModule
} from "angular-bootstrap-md";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
// import { MatFileUploadModule } from './angular-material-fileupload/';
import { MatSelectModule } from "@angular/material/select";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatMenuModule} from '@angular/material/menu';
import {MatSortModule} from '@angular/material/sort';

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
import { QualificationFormComponent } from './components/qualification-form/qualification-form.component';
import { KidsFormComponent } from './components/kids-form/kids-form.component';
import { RatesFormComponent } from './components/rates-form/rates-form.component';
import { NotesFormComponent } from './components/notes-form/notes-form.component';
import { ClientsListsComponent } from './components/clients-lists/clients-lists.component';
import { ClientsViewComponent } from './components/clients-view/clients-view.component';
import { OtherClientDetailsComponent } from './components/new-client/other-client-details/other-client-details.component';


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
    QualificationFormComponent,
    KidsFormComponent,
    RatesFormComponent,
    NotesFormComponent,
    ClientsListsComponent,
    ClientsViewComponent,
    OtherClientDetailsComponent,
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
    MatExpansionModule,
    MatDialogModule,
    MatTabsModule,
    MatSnackBarModule,
    Ng2SearchPipeModule,
    MatMenuModule,
    MatSortModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents: [
    QualificationFormComponent,
    KidsFormComponent,
    RatesFormComponent,
    NotesFormComponent
  ]
})
export class AppModule {}
