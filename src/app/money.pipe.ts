import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: string | number, args?: any): any {

    if (typeof value == 'string') {
      value = parseInt(value);
    }
    value *= 0.01;

    return value.toFixed(2);



  }

}
