import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeamsComponent } from './components/teams/teams.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewTeamComponent } from './components/view-team/view-team.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    NavbarComponent,
    ViewTeamComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
