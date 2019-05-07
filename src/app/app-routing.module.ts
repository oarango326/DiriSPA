import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroeComponent} from './components/heroe/heroe.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
