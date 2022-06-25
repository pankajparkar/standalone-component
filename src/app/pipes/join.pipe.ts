import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(arrayString: string[], separator: string): string {
    return arrayString.join(separator);
  }

}
