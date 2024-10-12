import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { data } from './../data';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule,ItemComponent, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() searchTerm: string = '';  // Recibe el término de búsqueda
  @Output() selectPerson = new EventEmitter<any>();  // Emitir evento para seleccionar persona
  
  items = data;  
  filteredItems = data;  // Lista filtrada

  ngOnChanges() {
    this.filterItems();  // Filtrar items cuando cambia el searchTerm
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
    this.selectPerson.emit(person);  // Emitir persona seleccionada
  }
}
