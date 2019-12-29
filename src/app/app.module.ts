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
import { NewClientComponent } from './views/new-client/new-client.component';
import { NewDietitianComponent } from './views/new-dietitian/new-dietitian.component';
import { DashboardRightComponent } from './views/partials/dashboard-right/dashboard-right.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    NewClientComponent,
    NewDietitianComponent,
    DashboardRightComponent
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
