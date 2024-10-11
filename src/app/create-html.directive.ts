import { Directive, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngCreateHtml]',
  standalone: true
})
export class CreateHtmlDirective implements OnInit, OnChanges {

  @Input() 
  set ngCreateHtml(value: boolean){
    if(value){
      this.viewContainer.createEmbeddedView(this.templateRef)
      this.sendMessage.emit('Se ha creado')
    } else {
      this.viewContainer.clear()
      this.sendMessage.emit('Se ha destruido')
    }
  }

  @Output() sendMessage: EventEmitter<string> = new EventEmitter<string>();


  constructor(private viewContainer: ViewContainerRef,
              private templateRef: TemplateRef<any>
  ){
    //referencia al html(DIV- template ref)
    // donde vas a redenrizar el template (ViewContainer)
   }


ngOnInit(): void {
   /* if(this.ngCreateHtml){
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainer.clear()
    } */
}

//1. Solucion para que construya y destruya el html
ngOnChanges(changes: SimpleChanges): void {
  /*if(changes['ngCreateHtml']){
    if(this.ngCreateHtml){
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainer.clear()
    }
  }*/
}

}
