import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() item: any;  
  @Output() delete = new EventEmitter<void>();
  onDelete() {
    this.delete.emit();
  }
  onShow(){

  }
}
