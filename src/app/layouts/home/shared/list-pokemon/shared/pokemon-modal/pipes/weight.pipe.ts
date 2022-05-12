import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weight',
})
export class WeightPipe implements PipeTransform {
  public transform(value: number): string {
    return (value * 0.22046).toFixed(1);
  }
}
