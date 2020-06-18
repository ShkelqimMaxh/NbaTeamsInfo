import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TeamsComponent} from './components/teams/teams.component';
import {ViewTeamComponent} from './components/view-team/view-team.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {path:  '', component: TeamsComponent},
  {path: 'team/:id', component: ViewTeamComponent },
  {path:  '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  providers: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
