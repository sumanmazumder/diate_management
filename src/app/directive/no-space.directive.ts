import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appnospace]'
})
export class NoSpaceDirective {
  @Input('appnospace') inputValue : any;
  constructor( private el : ElementRef) { }
  @HostListener('keydown', ['$event']) onKeyDown(event){
    let e = <KeyboardEvent> event;
    // console.log(e.code);
    
        if(this.inputValue){
            if(e.keyCode == 32 && e.code == 'Space'){
              e.preventDefault();
            }else{
              return;
            }
        }
  }
}
