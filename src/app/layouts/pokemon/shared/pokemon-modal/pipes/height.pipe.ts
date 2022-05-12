import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'height',
})
export class HeightPipe implements PipeTransform {
  public transform(value: number): string {
    return (value * 0.32808).toFixed(2);
  }
}
