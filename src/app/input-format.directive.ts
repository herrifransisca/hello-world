import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus') onfocus() {
    console.log('on Focus');
  }

  @HostListener('blur') onblur() {
    let value: string = this.el.nativeElement.value;

    this.el.nativeElement.value = value.toLowerCase();
  }

}
