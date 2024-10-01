import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from './user-card/user-card.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list/person-list.component';

interface Person{
  name: string,
  lastName: string,
  age?: number
}
  
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserCardComponent, CalculatorComponent, CommonModule, PersonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  userCardCreated: boolean = true 

  result: number = 0;
  title:number = 10;
  animals:string[] = ['a','b','c','d','e','f','g'];

  person: Person = {
    name: 'Ernesto',
    lastName: 'Juarez',
    age: 21
  }

  students: number[] = [1,2,3,4,5,6]
  parents:number[] = [7,8,9,10]


  var1 = 0
  var2 = null
  var3 = 'hola'

  constructor(){
    const { name, age }= this.person
    console.log('desestructuracion', name, age)

    let both = [...this.students, ...this.parents] //Esto es para el Spred Operator
    console.log('spreed operator: ', both)

    console.log('REST operator', this.sum(2,4,6))
    console.log('Nullish Coalessing: ', this.var2 ?? this.var3) // Nullish
    console.log('OR: ', this.var2 || this.var1) // OR de la vida



    console.log('substract', this.substrack(8,4))
    console.log('MAP:', this.animals.map((animal)=> (animal + ' new')))
    console.log('FOREACH:', this.animals.forEach((animal)=> (animal + ' new')))
    console.log('FIND:', this.animals.find((animal)=> animal==='z'))
    console.log('FILTER:', this.animals.filter((animal)=> animal==='y'))
    console.log('INDEXOF:', this.animals.indexOf('c'))
  }

  public sum(...persons:number[]){
    //return persons[0] + persons[1]   // Esto es para el Rest Operator
    return persons.reduce((acumulador, valorActual) => 
      (acumulador + valorActual), 10
    ) //Esto es para el Reduce Operator
  }
  public sum2(num1: number, num2: number): number{
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

  // function sumar() {
  //   return 1 + 2; 
  // }

  // const sumna = () =>{
  //   return 1 + 2;
  // }

  // function resta(a){
  //   return 'hola' + a;
  // }

  // const resta = () => (20 - a);

  public receiveData(data: any){
    console.log('Print in father component: ', data)
  }

  public onResult(event: any){
    this.result = event ?? 0
  }

}
