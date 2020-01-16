import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./views/auth/login/login.component";
import { AuthGuard } from "./auth.guard";
import { AllDetailsComponent } from './components/all-details/all-details.component';
import { NewClientComponent } from './components/new-client/new-client.component';
import { NewDietitianComponent } from './components/new-dietitian/new-dietitian.component';
// import { NotesComponent } from './components/notes/notes.component';
import { TasksComponent } from './components/modal/tasks/tasks.component';
// import { IssuesComponent } from './components/modal/issues/issues.component';
import { CalendarComponent } from './components/calendar/calendar.component';
// import { InvoicesComponent } from './components/invoices/invoices.component';
import { SettingsComponent } from './components/settings/settings.component';
import { GuestGuard } from './guest.guard';
import { ClientsListsComponent } from './components/clients-lists/clients-lists.component';
import { ClientsViewComponent } from './components/clients-view/clients-view.component';




const routes: Routes = [

  { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
  { path: "login", component: LoginComponent, canActivate: [GuestGuard] },


  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard], children:[
    {path: '', redirectTo:"allDetails", pathMatch: 'full'},
    { path: "allDetails", component: AllDetailsComponent, canActivate: [AuthGuard],},
    { path: "newClients", component: NewClientComponent, canActivate: [AuthGuard] },
    { path: "newDietitian", component: NewDietitianComponent, canActivate: [AuthGuard] },
    
    // { path: "notes", component: NotesComponent, canActivate: [AuthGuard]},
    
    // { path: "issues", component: IssuesComponent, canActivate: [AuthGuard]},
    { path: "canendar", component: CalendarComponent, canActivate: [AuthGuard]},
    // { path: "invoices", component: InvoicesComponent, canActivate: [AuthGuard]},
    { path: "settings", component: SettingsComponent, canActivate: [AuthGuard]},

    {path: "client-lists", component: ClientsListsComponent, canActivate: [AuthGuard]},
    {path: "clientDetails/:userId", component: ClientsViewComponent, canActivate: [AuthGuard]},
    {path: "clientEdit/:userId", component: NewClientComponent, canActivate: [AuthGuard]}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
