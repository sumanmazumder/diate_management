import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./views/auth/login/login.component";
import { AuthGuard } from "./auth.guard";
import { AllDetailsComponent } from './components/all-details/all-details.component';
import { NewClientComponent } from './components/new-client/new-client.component';
import { NewDietitianComponent } from './components/new-dietitian/new-dietitian.component';
import { NotesComponent } from './components/notes/notes.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { IssuesComponent } from './components/issues/issues.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { SettingsComponent } from './components/settings/settings.component';





const routes: Routes = [
  // { path: "", redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard] },

  { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  // { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },


  { path: "dashboard", component: DashboardComponent, children:[
    {path: '', redirectTo:"allDetails", pathMatch: 'full'},
    { path: "allDetails", component: AllDetailsComponent, },
    { path: "newClients", component: NewClientComponent, },
    { path: "newDietitian", component: NewDietitianComponent, },
    { path: "notes", component: NotesComponent, },
    { path: "tasks", component: TasksComponent, },
    { path: "issues", component: IssuesComponent, },
    { path: "canendar", component: CalendarComponent, },
    { path: "invoices", component: InvoicesComponent, },
    { path: "settings", component: SettingsComponent, },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
