import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./views/auth/login/login.component";
import { AuthGuard } from "./auth.guard";
import { NewDietitianComponent } from './views/new-dietitian/new-dietitian.component';
import { DashboardRightComponent } from './views/partials/dashboard-right/dashboard-right.component';
const routes: Routes = [
  // { path: "", redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  // { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "dashboard", component: DashboardComponent, children:[
    {path: '', redirectTo:"dashboardDetails", pathMatch: 'full'},
    {path: "dashboardDetails", component:DashboardRightComponent}
  ]},
  { path: "newDietitian", component: NewDietitianComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
