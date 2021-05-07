import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent} from './auth/login/login.component';
import { RegcompanyComponent } from "./auth/register/regcompany/regcompany.component";
import { ReghackerComponent } from "./auth/register/reghacker/reghacker.component";
import { RegisterComponent} from './auth/register/register.component'
import { ProgramComponent } from "./company/program/program/program.component";

import { DashboardComponent } from "./dashboard/dashboard.component";

import { DirectoryComponent } from "./directory/directory.component";
import { ErrorComponent } from "./error/error.component";
import { CompanyGuard } from "./guards/company.guard";
import { LoginGuard } from "./guards/login.guard";
import { LogoutGuard } from "./guards/logout.guard";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { SpecificProgramComponent } from "./specific-program/specific-program.component";
import { SupportComponent } from "./support/support.component";

const APP_ROUTES : Routes = [
    {path: '', component: HomeComponent},
    {path: 'directory',component: DirectoryComponent},
    {path: 'login', component: LoginComponent, canActivate: [LogoutGuard]},
    {path: 'dashboard',component: DashboardComponent, canActivate: [LoginGuard]},
    {path: 'error', component: ErrorComponent},
    {path : 'profile' , component: ProfileComponent, canActivate: [LoginGuard]},
    {path: 'program', children: [ 
        {path: '',component: ProgramComponent, canActivate: [CompanyGuard]},
        {path: ':id',component:SpecificProgramComponent}
    ],canActivate: [LoginGuard]},
    {path: 'support', component: SupportComponent},
    {path: 'register', children:[
        {path: '', component: RegisterComponent},
        {path: 'hacker', component: ReghackerComponent},
        {path: 'company', component: RegcompanyComponent},
    ], canActivate: [LogoutGuard]}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);