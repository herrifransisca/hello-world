import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor() { }

  @HostListener('focus') onfocus() {
    console.log('on Focus');
  }

  @HostListener('blur') onblur() {
    console.log('on Blur');
  }

}
