import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { UserCardComponent } from "./user-card/user-card.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { CommonModule } from "@angular/common";
import { PersonListComponent } from "./person-list/person-list.component";
import { CounterComponent } from "./counter/counter.component";
import { filter, from, map, tap } from "rxjs";
import { AppColorsDirective } from "./app-colors.directive";
import { CreateHtmlDirective } from "./create-html.directive";
import { PurePipe } from "./pure.pipe";
import { ImpurePipe } from "./impure.pipe";

interface Person {
  name: string;
  lastName: string;
  age?: number;
}

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    UserCardComponent,
    CalculatorComponent,
    CommonModule,
    PersonListComponent,
    CounterComponent,
    AppColorsDirective,
    CreateHtmlDirective,
    PurePipe,
    ImpurePipe
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  users = [
    { name: "abc", email: "abs@gmail.com" },
    { name: "dfg", email: "dfg@gmail.com" },
  ];
  selectedUser: any = this.users[0];

  userCardCreated: boolean = true;

  result: number = 0;
  title: number = 10;
  animals: string[] = ["a", "b", "c", "d", "e", "f", "g"];

  person: Person = {
    name: "Ernesto",
    lastName: "Juarez",
    age: 21,
  };

  students: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  parents: number[] = [7, 8, 9, 10];

  var1 = 0;
  var2 = null;
  var3 = "hola";

  youtube = from([1, 2, 3, 4, 5, 6]); //Nuevo observable

  constructor() {
    const { name, age } = this.person;
    //console.log('desestructuracion', name, age)

    let both = [...this.students, ...this.parents]; //Esto es para el Spred Operator
    //console.log('spreed operator: ', both)

    //console.log('REST operator', this.sum(2,4,6))
    //console.log('Nullish Coalessing: ', this.var2 ?? this.var3) // Nullish
    //console.log('OR: ', this.var2 || this.var1) // OR de la vida

    //console.log('substract', this.substrack(8,4))
    //console.log('MAP:', this.animals.map((animal)=> (animal + ' new')))
    //console.log('FOREACH:', this.animals.forEach((animal)=> (animal + ' new')))
    //console.log('FIND:', this.animals.find((animal)=> animal==='z'))
    //console.log('FILTER:', this.animals.filter((animal)=> animal==='y'))
    //console.log('INDEXOF:', this.animals.indexOf('c'))

    this.youtube.subscribe((res) => {
      console.log("SUSBCRIBER 1: ", res);
    });
  }

  addVideo() {
    this.youtube
      .pipe(
        map((res: number) => {
          //console.log('MAP OPERATOR RXJS: ',res)
          if (res % 2 === 0) {
            return res;
          } else {
            return null;
          }
        }),
        tap((res) => {
          console.log("VALUE: ", res);
        }),
        filter((res: number | null) => res !== null)
      )
      .subscribe((res) => {
        console.log("SUSBSCRIBER 2: ", res);
      });
  }

  public sum(...persons: number[]) {
    //return persons[0] + persons[1]   // Esto es para el Rest Operator
    return persons.reduce(
      (acumulador, valorActual) => acumulador + valorActual,
      10
    ); //Esto es para el Reduce Operator
  }
  public sum2(num1: number, num2: number): number {
    return num1 + num2;
  }

  private substrack(num1: number, num2: number): number {
    return num1 - num2;
  }

  public getArray() {
    const people: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = 0; i < people.length; i++) {
      if (people[i] % 2 == 0) {
        //console.log('person =', people[i]);
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

  public receiveData(data: any) {
    console.log("Print in father component: ", data);
  }

  public onResult(event: any) {
    this.result = event ?? 0;
  }

  public getColor(value: any): void {
    console.log(value);
  }

  public sumPure(a:number, b:number): number {
    return a + b;
  }
  public sumImpure(a:number, b:number): number {
    return a + b + Math.random();
  }
  public addNumber() {
    this.students = [...this.students, 12]
  }
}
