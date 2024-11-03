import { Pipe, PipeTransform } from '@angular/core';
export enum meuPipe {
  Active = 'active',
  Partial = 'partial',
  Blocked = 'blocked'
}
@Pipe({
  name: 'statusclass'
})
export class StatusclassPipe implements PipeTransform {

  transform(status: meuPipe): string {
    
    return status

  }
 
}
