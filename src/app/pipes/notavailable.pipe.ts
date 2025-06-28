import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notavailable'
})
export class NotavailablePipe implements PipeTransform {

  transform(value: unknown): unknown {
    debugger
    if(value == "" || value == null || value == undefined) {
      return "NA";
    } else {
      return value
    }
  }
}
