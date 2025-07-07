import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { SportComponent } from './components/sport/sport.component';
import { JeuxComponent } from './components/jeux/jeux.component';
import { ScienceComponent } from './components/science/science.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"sport",component:SportComponent},
  {path:"jeux",component:JeuxComponent},
  {path:"science",component:ScienceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
