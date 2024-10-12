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
  @Output() show = new EventEmitter<any>();  // Emitirá el item al hacer clic en "Show"

  onDelete() {
    this.delete.emit();
  }

  onShow() {
    this.show.emit(this.item);  // Emite el item al hacer clic en "Show"
  }
}
