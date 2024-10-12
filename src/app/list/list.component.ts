import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { data } from './../data';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ItemComponent, FormsModule, SearchComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() searchTerm: string = '';
  @Input() item: any;  
  @Output() delete = new EventEmitter<void>();
  @Output() show = new EventEmitter<any>();
  @Output() selectPerson = new EventEmitter<any>();
  items = data;  
  filteredItems = data;

  ngOnChanges() {
    this.filterItems();
  }

  filterItems() {
    if (this.searchTerm) {
      this.filteredItems = this.items.filter(item =>
        `${item.name} ${item.lastName}`.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredItems = this.items;
    }
  }

  removeItem(id: string) {
    this.filteredItems = this.filteredItems.filter(item => item.id !== id);
    this.items = this.items.filter(item => item.id !== id);
  }

  onShowPerson(person: any) {
    this.selectPerson.emit(person); // Este ya está correcto.
    this.searchTerm = ''; // Reinicia el término de búsqueda si es necesario
  }
  

  onSearch(searchTerm: string) { // Asegúrate de que esta función exista
    this.searchTerm = searchTerm;
    this.filterItems();
  }
}