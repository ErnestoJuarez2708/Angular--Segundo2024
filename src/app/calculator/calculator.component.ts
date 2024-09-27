import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from '../history/history.component';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule, HistoryComponent],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  box1Value: number = 0;
  box2Value: number = 0;
  
  history: ['sum' | 'mul', number][] = []; 

  @Output() sum = new EventEmitter<number>();
  @Output() mul = new EventEmitter<number>();
  @Output() reset = new EventEmitter<void>();

  public onSum() {
    const result = Number(this.box1Value) + Number(this.box2Value);
    this.sum.emit(result);
    this.history.push(['sum', result]); 
  }

  public onMul() {
    const result = Number(this.box1Value) * Number(this.box2Value);
    this.mul.emit(result);
    this.history.push(['mul', result]);
  }

  public onReset() {
    this.box1Value = 0;
    this.box2Value = 0;
    this.history = [];
    this.reset.emit();
  }
}
