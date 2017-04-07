import { Component, Input } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
})

export class EditPlayerComponent {
  @Input() selectedPlayer;

  constructor(private playerService: PlayerService) { }

  beginUpdatingPlayer(playerToUpdate) {
    this.playerService.updatePlayer(playerToUpdate);
  }

  beginDeletingPlayer(playerToDelete) {
    if(confirm("Are you sure you want to delete this Player?")) {
    this.playerService.deletePlayer(playerToDelete);
    }
  }
}
