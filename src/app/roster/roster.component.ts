import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [PlayerService]
})

export class RosterComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByRank: string = "allPlayers";

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

  goToDetailPage(clickedPlayer) {
   this.router.navigate(['players', clickedPlayer.$key]);
 };

 onChange(optionFromMenu) {
   this.filterByRank = optionFromMenu;
 }
}
