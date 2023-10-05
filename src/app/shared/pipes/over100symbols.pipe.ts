import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'over100symbols'
})
export class Over100symbolsPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length <= 100) {
      return value;
    } else {
      return value.substring(0,100) + '...'
    }

  }
}
