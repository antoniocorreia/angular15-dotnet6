import { Component, Input, OnInit } from '@angular/core';
import { SuperHero } from 'src/app/models/super-hero';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.scss']
})
export class EditHeroComponent {
  @Input() hero?: SuperHero;

  constructor(){}

  ngOnInit():void{

  }

  updateHero(hero:SuperHero){

  }

  deleteHero(hero:SuperHero){

  }

  createHero(hero:SuperHero){
    
  }
}