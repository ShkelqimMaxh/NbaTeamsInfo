import { Component, OnInit } from '@angular/core';
import {TeamsService} from '../../services/teams.service';
import {Team} from '../../models/Team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  team: Team;
  teams: Team[];
  photoList: any;

  constructor(
    private teamsService: TeamsService
  ) {
  }

  ngOnInit(): void {
    this.teamsService.getNbaTeams().subscribe((response: any) => {
      this.teams = response.data;
    });

    this.teamsService.getPhotos().subscribe(data => {
      this.photoList = data;
    });
  }

}
