import { Component, afterRender, afterNextRender } from '@angular/core';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  sum: number = 0
  appBackground: string = 'red'


  constructor(){
    afterRender({
      // earlyRead: () => {
      //   const currentAppColor = this.appBackground
      //   return 'From earlyRead: ' + currentAppColor
      // },
      write: () => {
        document.body.style.backgroundColor = this.appBackground

        const currentAppColor = this.appBackground
        if(currentAppColor.includes('red')){
          this.appBackground = 'blue'
        }else{
          this.appBackground = 'red'
        }

        return 'From write: ' + this.appBackground
      },
      // mixedReadWrite: (props) => {
      //   if (props.indexOf('red') > -1){
      //     this.appBackground = 'green'
      //   } else {
      //     this.appBackground = 'red'
      //   }
      //   return 'From mixedReadWrite: ' + this.appBackground
      // },
      read: (props) => {
        console.log('INTO read', props)
        const newBackground =  this.appBackground
        console.log('From read ', newBackground)
      },
    })

    afterNextRender(() => {
      console.log('AFTER NEXT RENDER: ', this.sum)
    })
  }
}
