import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  constructor() {}
  transform(value: String, limit: number) {
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    }
    return value;
  }
}
