import { Component, OnInit } from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public titulo: string;
  constructor( private _heroeService: HeroesService) { }
  heroes: Heroe[] = [];

  ngOnInit() {
  this.heroes = this._heroeService.getHeroes();

  }

}
