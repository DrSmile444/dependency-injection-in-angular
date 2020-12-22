import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'transformWebsite'
})
export class TransformWebsitePipe implements PipeTransform {
  transform(website: string): string {
    return `https://${website}`;
  }
}
