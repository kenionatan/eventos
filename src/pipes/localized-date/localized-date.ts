import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'localizedDatePipe',
  pure: false
})
export class LocalizedDatePipe implements PipeTransform {
  
  constructor(private translateService: TranslateService) {
    this.translateService.use('pt');
  }

  transform(value: any, pattern: string = 'mediumDate') : any {
    const datePipe: DatePipe = new DatePipe(this.translateService.currentLang);
    return datePipe.transform(value, pattern);
  }
}
