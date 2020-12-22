import {Pipe, PipeTransform} from '@angular/core';
import {UserAddress} from '../models';


@Pipe({
  name: 'transformAddress'
})
export class TransformAddressPipe implements PipeTransform {
  transform(userAddress: UserAddress): string {
    return `${userAddress.city}, ${userAddress.street}, ${userAddress.suite}`;
  }
}
