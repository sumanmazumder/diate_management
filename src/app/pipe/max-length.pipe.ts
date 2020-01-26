import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(value: any, length: number, event:any): any {
    console.log(value, length);
    console.log(event);
    
    if(value.toString().length > length){
      
      return false;
    }
  }

}
