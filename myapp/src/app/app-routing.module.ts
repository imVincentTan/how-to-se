import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularNotesComponent } from './angular-notes/angular-notes.component';
import { BoardComponent } from './board/board.component';
import { CSharpDotNetNotesComponent } from './c-sharp-dot-net-notes/c-sharp-dot-net-notes.component';
import { CoreDevToolsNotesComponent } from './core-dev-tools-notes/core-dev-tools-notes.component';
import { ErrorComponent } from './error/error.component';
import { FrontendLibrariesNotesComponent } from './frontend-libraries-notes/frontend-libraries-notes.component';
import { HomeComponent } from './home/home.component';
import { SqlNotesComponent } from './sql-notes/sql-notes.component';
import { StylingNotesComponent } from './styling-notes/styling-notes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'angular', component: AngularNotesComponent},
  { path: 'styling', component: StylingNotesComponent},
  { path: 'frontend-libraries', component: FrontendLibrariesNotesComponent},
  { path: 'core-dev-tools', component: CoreDevToolsNotesComponent},
  { path: 'c-sharp-dot-net', component: CSharpDotNetNotesComponent},
  { path: 'sql', component: SqlNotesComponent},

  { path: 'tictactoe', component: BoardComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
