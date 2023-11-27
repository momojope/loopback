import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './containers/main/main.component';
import { NewNoteComponent } from './containers/new-note/new-note.component';


const routes: Routes = [

  {
    path: '',
    component: MainComponent
  },
  {
    path: 'new',
    component: NewNoteComponent
  },
  {
    path: 'edit/:id',
    component: NewNoteComponent
  } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
