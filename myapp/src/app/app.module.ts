import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { StylingNotesComponent } from './styling-notes/styling-notes.component';
import { FrontendLibrariesNotesComponent } from './frontend-libraries-notes/frontend-libraries-notes.component';
import { CoreDevToolsNotesComponent } from './core-dev-tools-notes/core-dev-tools-notes.component';
import { CSharpDotNetNotesComponent } from './c-sharp-dot-net-notes/c-sharp-dot-net-notes.component';
import { SqlNotesComponent } from './sql-notes/sql-notes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CurrentTimeComponent } from './current-time/current-time.component';
import { MapSampleComponent } from './map-sample/map-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    HomeComponent,
    ErrorComponent,
    AngularNotesComponent,
    StylingNotesComponent,
    FrontendLibrariesNotesComponent,
    CoreDevToolsNotesComponent,
    CSharpDotNetNotesComponent,
    SqlNotesComponent,
    CurrentTimeComponent,
    MapSampleComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
