import { Component } from '@angular/core';
import { Player } from '../player.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlayerService]
})

export class AdminComponent {

  constructor(private playerService: PlayerService) { }

  submitForm(name: string, rank: number, handicap: number, earnings: number) {
    var newPlayer: Player = new Player(name, rank, handicap, earnings);
    this.playerService.addPlayer(newPlayer);
  }

}
