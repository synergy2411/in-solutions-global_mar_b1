import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() favColor : string;
  @Output() theEvent = new EventEmitter<string> ();

  @HostBinding('style.backgroundColor') bgColor  :any;

  @HostListener('mouseenter') onmouseenter(){
    console.log("Mouse entered")
    this.bgColor = this.favColor;
    this.theEvent.emit("yellow");
  }

  @HostListener('mouseleave') onmouseleave(){
    this.bgColor = 'transparent';
  }

  constructor(private elementRef : ElementRef) {
    // console.log(this.elementRef.nativeElement);
    // this.elementRef.nativeElement.style.backgroundColor = 'aqua';
    // this.bgColor = "yellow";
  }

}
