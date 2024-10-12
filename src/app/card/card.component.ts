import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  currentTab: string = 'personal';

  
  @Input() person: any;

  get score(): number {
    if (!this.person) {
      return 0; 
    }
    const { firstTestScore, secondTestScore, finalTestScore } = this.person;
    return (firstTestScore! + secondTestScore! + finalTestScore!) / 3;
  }

  setTab(tab: string) {
    this.currentTab = tab;
  }
}
