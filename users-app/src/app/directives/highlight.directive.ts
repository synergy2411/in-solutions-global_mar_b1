import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef : ElementRef) {
    // console.log(this.elementRef.nativeElement);
    this.elementRef.nativeElement.style.backgroundColor = 'aqua';
  }

}
