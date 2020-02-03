import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMaxLength]'
})
export class MaxLengthDirective {

  constructor(private el : ElementRef) { }
  @HostListener('keydown', ['$event']) onKeyDown(event){
    let e = <KeyboardEvent> event;
    const newValue = e.target['value'];    
    if(newValue.length > 9){
      e.preventDefault();
    }else{
      return;
    }
    
  }
}
