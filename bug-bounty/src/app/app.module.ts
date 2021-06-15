import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ROUTING } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ReghackerComponent } from './auth/register/reghacker/reghacker.component';
import { RegcompanyComponent } from './auth/register/regcompany/regcompany.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginGuard } from './guards/login.guard';
import { LogoutGuard } from './guards/logout.guard';
import { ProfileComponent } from './profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app.material';
import { DialogDelete, DialogEdit, ProgramComponent } from './company/program/program/program.component';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SupportComponent } from './support/support.component';
import { DialogSubmit, SpecificProgramComponent } from './specific-program/specific-program.component';
import { LoginInterceptorProvider } from './interceptors/login.interceptor';
import { HacktivityComponent } from './hacktivity/hacktivity.component';
import { DirectoryComponent } from './directory/directory.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ActivityComponent } from './activity/activity.component';
import { SpecificActivityComponent } from './activity/specific-activity/specific-activity.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContainerComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ReghackerComponent,
    RegcompanyComponent,
    DashboardComponent,
    ErrorComponent,
    ProfileComponent,
    ProgramComponent,
    DialogDelete,
    DialogEdit,
    DialogSubmit,
    SupportComponent,
    SpecificProgramComponent,
    HacktivityComponent,
    DirectoryComponent,
    ActivityComponent,
    SpecificActivityComponent,
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ROUTING,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    LoginInterceptorProvider,
    LoginGuard,
    LogoutGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
