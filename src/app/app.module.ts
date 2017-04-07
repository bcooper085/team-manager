import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RosterComponent } from './roster/roster.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AdminComponent } from './admin/admin.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';
import { RankingPipe } from './ranking.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    AboutComponent,
    PlayerDetailComponent,
    AdminComponent,
    EditPlayerComponent,
    RankingPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
