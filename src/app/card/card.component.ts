import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { data } from '../data';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  currentTab: string = 'personal';

  person = data[0];

  get score(): number {
    const { firstTestScore, secondTestScore, finalTestScore } = this.person;
    return (firstTestScore! + secondTestScore! + finalTestScore!) / 3;
  }

  setTab(tab: string) {
    this.currentTab = tab;
  }
}
