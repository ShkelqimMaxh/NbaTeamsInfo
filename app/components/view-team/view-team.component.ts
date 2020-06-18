import { Component, OnInit } from '@angular/core';
import {TeamsService} from '../../services/teams.service';
import {ActivatedRoute} from '@angular/router';
import {Team} from '../../models/Team';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent implements OnInit {
  players: any;
  teams: Team[];
  id: string;
  team: Team;
  photoList: any;

  constructor(private teamService: TeamsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.teamService.getPlayers().subscribe(data => {
      this.players = data;
    });

    this.teamService.getNbaTeams().subscribe((response: any) => {
      this.teams = response.data;
    });

    this.id = this.route.snapshot.paramMap.get('id');
    this.teamService.getTeam(this.id).subscribe((response: any) => {
      this.team = response;
      console.log(this.team);
    });

    this.teamService.getPhotos().subscribe(data => {
      this.photoList = data;
    });
  }
}
