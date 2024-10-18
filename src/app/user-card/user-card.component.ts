import { SharedModule } from './../shared/shared.module';
import { CommonModule } from "@angular/common";
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  viewChild,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: "user-card",
  standalone: true,
  imports: [CommonModule, FormsModule, SharedModule],
  templateUrl: "./user-card.component.html",
  styleUrl: "./user-card.component.scss",
})
export class UserCardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked
{
  @Input() name: string = ""; //Se pone input cuando se quiere recibir datos del padre
  @Input() email: string = "";

  @Output() sendData = new EventEmitter(); // Para hacer Click, envia los datos al padre

  @ViewChild('buttonTest', {static: true}) buttonTest!: ElementRef
  @ViewChild('buttonShow', {static: true}) buttonShow!: ElementRef

  password: string = "";
  showButton: boolean = false;


  subscription: Subscription =  new Subscription();

  constructor(private activatedRoute: ActivatedRoute) {
    //console.log("user card constructor");

    this.subscription.add(this.activatedRoute.params.subscribe((params) => {
      console.log("PARAMS: ", params)
    }))

    


    console.log('Snapshot: ', this.activatedRoute.snapshot.params)

  }

  ngOnInit(): void {
    console.log("user card ngOnInit");

    this.buttonShow.nativeElement.textContent = 'button Show in OnInit'
    this.buttonTest.nativeElement.textContent = 'button Test in OnInit'

    //this.password = this.name + ' ' + this.email + ' PASSWORD'
  }

  ngOnDestroy(): void {
    console.log("User card Destroy");
    this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("CHANGES: ", changes);

    this.password =
      changes["name"].currentValue +
      changes["email"].currentValue +
      " PASSWORD";
  }

  ngDoCheck(): void {
    console.log("DO CHECK user card");
  }

  ngAfterContentInit(): void {
    console.log("NG After CONTENT INIT");
  }

  ngAfterContentChecked(): void {
    console.log("Ng After Content CHECKED")
  }

  ngAfterViewInit(): void {
    console.log("NG AFTER VIEW INIT");
    console.log("BUTTON TEST", this.buttonTest);

    if(this.buttonTest){
      this.buttonTest.nativeElement.textContent = 'button Test in After View Init'
    }
  }

  ngAfterViewChecked(): void {
      console.log('NG AFTER VIEW CHECKED')
  }

  public onSendData() {
    this.sendData.emit("Hi from child component");
  }
}
