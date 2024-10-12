import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { SearchComponent } from '../search/search.component';
import { data } from '../data';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ItemComponent, SearchComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnChanges {
  currentTab: string = 'personal';
  @Input() item: any; 
  @Input() searchTerm: string = '';
  @Input() person: any;

  items = data; 
  filteredMessages: string[] = []; 

  get score(): number {
    if (!this.person) {
      return 0; 
    }
    const { firstTestScore, secondTestScore, finalTestScore } = this.person;
    return (firstTestScore! + secondTestScore! + finalTestScore!) / 3;
  }

  isProfessor(): boolean {
    return this.person?.type === 'professor';
  }

  setTab(tab: string) {
    this.currentTab = tab;
    if (tab === 'messages') {
      this.filteredMessages = this.person.messages;
    }
  }

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filterMessages();
  }

  filterMessages() {
    if (this.searchTerm) {
      this.filteredMessages = this.person.messages.filter((message: string) =>
        message.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredMessages = this.person.messages;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['person']) {
      this.filterMessages();
    }
  }
}