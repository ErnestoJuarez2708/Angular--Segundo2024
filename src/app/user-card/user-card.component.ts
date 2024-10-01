import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent implements OnInit, OnDestroy, OnChanges{
  @Input() name:string = '' //Se pone input cuando se quiere recibir datos del padre
  @Input() email:string = ''

  @Output() sendData = new EventEmitter() // Para hacer Click, envia los datos al padre

  password:  string = ''


  constructor(){
    console.log('user card constructor')
  }

  ngOnInit(): void {
    console.log('user card ngOnInit')


    //this.password = this.name + ' ' + this.email + ' PASSWORD'
  }

  ngOnDestroy(): void {
    console.log('User card Destroy')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('CHANGES: ', changes)

    this.password = changes['name'].currentValue + changes['email'].currentValue + ' PASSWORD'
  }

  public onSendData(){
      this.sendData.emit('Hi from child component')
  }
}