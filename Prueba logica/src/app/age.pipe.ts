import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any, minAge?: number): any {
    if (value == null) {
      return null;
    }
    if (minAge == null) {
      return null;
    }
    return value.filter(usuario => {
      return usuario.age < +minAge;
    });
  }

}
