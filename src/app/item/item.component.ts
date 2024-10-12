import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() item: any; 
  @Input() showActions: boolean = false;
  @Input() showActions2: boolean = false;
  @Output() delete = new EventEmitter<void>();
  @Output() show = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }

  onShow() {
    this.show.emit();
  }
}
