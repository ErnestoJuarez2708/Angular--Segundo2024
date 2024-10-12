import { CardComponent } from './card/card.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchComponent, ItemComponent, ListComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  selectedPerson: any = null;

  onSelectPerson(person: any) {
    this.selectedPerson = person;
  }
}