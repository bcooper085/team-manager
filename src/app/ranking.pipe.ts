import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'ranking',
  pure: false
})

export class RankingPipe implements PipeTransform {

  transform(input: Player[], desiredRanking) {
    var output: Player[] = [];

    if (desiredRanking === "topTen") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].rank <= 10) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
