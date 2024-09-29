import { Component, OnInit } from '@angular/core';
import personas from './personas.json';

interface Person {
  gender: string;
  name: string;
  age: number;
  discount?: boolean;
}

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  totalFemales: number = 0;
  totalMales: number = 0;
  totalDiscount: number = 0;

  public ngOnInit(): void {
    this.persons = personas;
    this.persons.forEach(person => {
      if (person.age > 18) {
        person.discount = true;
      }
    });
    this.calculateTotals();
  }

  public calculateTotals(): void {
    this.totalFemales = this.persons.filter(person => person.gender === 'female').length;
    this.totalMales = this.persons.filter(person => person.gender === 'male').length;
    this.totalDiscount = this.persons.filter(person => person.discount).length;
  }

  public deletePersonsWithDiscount(): void {
    this.persons = this.persons.filter(person => !person.discount);
    this.calculateTotals();
  }
}
