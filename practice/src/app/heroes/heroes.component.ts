import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  //changed var name from hero to person1 so clearer.
  
  selectedHero: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  heroes = HEROES;
  
  person1: Hero = {
    id: 1,
    name: 'Windstorm'
  }
  
  person2: Hero = {
    id: 2,
    name: 'Bob'
    
  }

  constructor() { }

  ngOnInit() {
  }

}
