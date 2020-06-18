import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Route} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  Teams: any;
  baseUrl: 'https://free-nba.p.rapidapi.com';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  getNbaTeams() {
    return this.http.get('https://free-nba.p.rapidapi.com/' + '/teams', {
      headers: {
        'x-rapidapi-host': 'free-nba.p.rapidapi.com',
        'x-rapidapi-key': '6fb1f7c997mshf8469b5e38ea176p1b43b0jsn8e3bf866a0cf'
      }
    });
  }

  getPhotos() {
    return this.http.get('https://extendsclass.com/api/json-storage/bin/fbfefab');
  }

  getPlayers() {
    return this.http.get('https://nba-players.herokuapp.com/players-stats');
  }

  getTeam(a: string) {
    return this.http.get('https://free-nba.p.rapidapi.com/' + 'teams/' + a, {
      headers: {
        'x-rapidapi-host': 'free-nba.p.rapidapi.com',
        'x-rapidapi-key': '6fb1f7c997mshf8469b5e38ea176p1b43b0jsn8e3bf866a0cf'
      }
    });
  }
}

