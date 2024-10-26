import { Router, RouterLink } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoryComponent } from '../history/history.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'calculator',
  standalone: true,
  imports: [FormsModule, HistoryComponent, RouterLink],
  template: `<div class="calculator-wrapper">
    <div class="calculator">
      <p>Calculator</p>
      <input type="text" [(ngModel)]="box1Value">
      <input type="text" [(ngModel)]="box2Value">
      <div>
        <button class="sum" (click)="onSum()">Sum</button>
        <button class="mul" (click)="onMul()">Mul</button>
        <button class="reset" (click)="onReset()">Reset</button>
        <button class="reset" (click)="onLogin()">Login</button>
        <button class="reset" [routerLink]="'/student'">Login without token</button>
      </div>
    </div>
  
    <!-- Componente de historial -->
    <history [history]="history"></history>
</div>`,
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  box1Value: number = 0;
  box2Value: number = 0;
  
  history: ['sum' | 'mul', number][] = []; 

  @Output() sum = new EventEmitter<number>();
  @Output() mul = new EventEmitter<number>();
  @Output() reset = new EventEmitter<void>();

  constructor(private _activatedRoute: ActivatedRoute, private _authService: AuthService, private _router: Router){

  }

  ngOnInit(): void{
    this._activatedRoute.queryParams.subscribe(params => {
      console.log('query params: ', params)
    })

    console.log('query params snapshot: ', this._activatedRoute.snapshot.queryParams)
  }

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
  onLogin(){
    this._authService.login()
    this._router.navigate(['/student'])
  }
}
