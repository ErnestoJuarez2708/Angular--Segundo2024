import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit, OnDestroy{
  @Input() name:string = ''
  @Input() email:string = ''

  @Output() sendData = new EventEmitter() // Para hacer Click

  constructor(){
    console.log('user card constructor')
  }

  ngOnInit(): void {
    console.log('user card ngOnInit')
  }

  ngOnDestroy(): void {
    console.log('User card Destroy')
  }

  public onSendData(){
      this.sendData.emit('Hi from child component')
  }
}