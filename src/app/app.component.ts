import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title:number = 10;
  

 
  constructor(){
    console.log('substract', this.substrack(8,4))
  }

  public sum(num1: number, num2: number): number{
    return num1 + num2;
  }

  private substrack(num1: number, num2: number): number{
      return num1 - num2;
  }

  public getArray(){
    const people: number[] = [1,2,3,4,5,6,7,8];
    for(let i = 0; i < people.length; i++){
      if(people[i] % 2 == 0){
        console.log('person =', people[i]);
      }
    }
  }

}
