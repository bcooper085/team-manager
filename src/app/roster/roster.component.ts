import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent  {

  constructor(private router: Router) { }

  players: Player[] = [

  ]

  goToDetailPage(clickedPlayer: Player) {
   this.router.navigate(['players', clickedPlayer.id]);
 };

}
