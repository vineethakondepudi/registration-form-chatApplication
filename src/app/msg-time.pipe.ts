import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msgTime'
})
export class MsgTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
