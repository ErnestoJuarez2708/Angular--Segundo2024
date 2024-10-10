import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { data } from './../data';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ItemComponent, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  items = data;
  filteredItems = data;

  @Output() selectPerson = new EventEmitter<any>(); // Emitirá el objeto persona

  filterItems(searchTerm: string) {
    if (searchTerm) {
      this.filteredItems = this.items.filter(item =>
        `${item.name} ${item.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredItems = this.items;
    }
  }

  showPerson(person: any) {
    this.selectPerson.emit(person); // Emitir el objeto persona seleccionado
  }

  removeItem(id: string) {
    this.filteredItems = this.filteredItems.filter(item => item.id !== id);
    this.items = this.items.filter(item => item.id !== id);
  }
}
