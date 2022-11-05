import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  damage = 0;
  dice = 1;

  rollDice(){
   this.dice = Math.floor(Math.random() * (6 - 1 + 1) + 1)
  }
  
  clickDamage(){
    this.damage = this.damage + 100;
    if(this.damage > 2000){
      this.damage = 0;
    }
  }
}


